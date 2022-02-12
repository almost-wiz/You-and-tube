from rest_framework import permissions, status, viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from uuid import uuid4
from django.core.cache import cache

from .serializers import *
from .permissions import *
from .service import *
from .tasks import send_message_action

import datetime


class ChatsViewset(viewsets.ModelViewSet):

    permission_classes = (permissions.IsAuthenticated, IsChatMember, IsChatOwnerOrReadOnly)
    queryset = Chat.objects.all()
    filterset_class = ChatFilter

    def get_queryset(self):
        chats = Chat.objects.all()
        if self.action == 'list':
            entries = [item.id for item in chats if self.request.user in item.members.all()]
            return Chat.objects.filter(pk__in=entries)
        return chats

    def get_serializer_class(self):
        if self.action == 'create':
            return ChatCreateSerializer
        elif self.action == 'update':
            return ChatUpdateSerializer
        elif self.action == 'retrieve':
            return ChatRetrieveSerializer
        else:
            return ChatSerializer


class leave_chat(APIView):

    permission_classes = (permissions.IsAuthenticated, )

    def put(self, request, **kwargs):
        chat = get_object_or_404(Chat, id=kwargs['pk'])

        if request.user not in chat.members.all():
            return Response({
                'detail': 'You do not have permission to perform this action.'
            }, status=status.HTTP_403_FORBIDDEN)

        members = [member for member in chat.members.all() if member != request.user]
        if len(members) >= 2:
            chat.members.set(members)
            response, code = 'You left chat successfully.', status.HTTP_201_CREATED
        else:
            chat.delete()
            response, code = 'Chat was deleted successfully.', status.HTTP_200_OK
        return Response({'chat': response}, status=code)


class MessageViewset(viewsets.ModelViewSet):

    permission_classes = (permissions.IsAuthenticated, CanViewMessage, IsAuthorOrReadOnly, )

    def get_queryset(self):
        chat = self.get_chat()
        return Message.objects.filter(chat=chat.id)

    def get_serializer_class(self):
        if self.action == 'create':
            return MessageCreateSerializer
        else:
            return MessageSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['chat'] = self.get_chat()
        context['unread_users'] = context['chat'].members.exclude(id=self.request.user.id)
        return context

    def get_chat(self):
        if self.kwargs.get('chat_id', None):
            return get_object_or_404(Chat, id=self.kwargs['chat_id'])
        return None

    def update(self, request, chat_id=None):
        msg_s = [int(id) for id in self.request.GET.get('id').split(',')]
        for msg in msg_s:
            Message.objects.mark_read(msg, request.user)
        return Response({
            'updated_messages': msg_s
        }, status=status.HTTP_201_CREATED)


class ChatTicketAPIView(APIView):

    permission_classes = (permissions.IsAuthenticated, )

    def get(self, request, *args, **kwargs):
        ticket_uuid = str(uuid4())

        if request.user.is_anonymous:
            cache.set(ticket_uuid, False, 3600 * 24)
        else:
            cache.set(ticket_uuid, request.user.id, 3600 * 24)

        return Response({'ticket_uuid': ticket_uuid})
