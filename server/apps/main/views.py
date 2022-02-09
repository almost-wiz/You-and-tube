from rest_framework import permissions, status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
import datetime

from .serializers import *
from .models import *
from .permissions import *
from .service import *


class VideoViewset(viewsets.ModelViewSet):

    permission_classes = (permissions.IsAuthenticated, IsAccessAllowed, IsAuthorOrReadOnly, )
    queryset = Video.objects.exclude(archived=True)
    filterset_class = VideoFilter

    def get_serializer_class(self):
        if self.action == 'list':
            return VideoSerializer
        elif self.action == 'create':
            return VideoCreateSerializer
        elif self.action == 'update':
            return VideoUpdateSerializer
        else:
            return VideoRetrieveSerializer


class CommentViewset(viewsets.ModelViewSet):

    permission_classes = (permissions.IsAuthenticated, IsAuthorOrReadOnly, )

    def get_queryset(self):
        if self.action != 'destroy':
            return Comment.objects.filter(video=self.kwargs.get('pk', None))
        else:
            return Comment.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return CommentSerializer
        elif self.action == 'create':
            return CommentCreateSerializer
        else:
            return CommentSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        if self.action == 'create':
            context['video'] = self.get_video()
        return context

    def get_video(self):
        if self.kwargs.get('pk', None):
            return get_object_or_404(Video, id=self.kwargs['pk'])
        return None


class SubscriptionViewset(viewsets.ModelViewSet):

    permission_classes = (permissions.IsAuthenticated, )
    serializer_class = SubscriptionSerializer

    def get_queryset(self):
        return Subscription.objects.filter(
            subscriber=self.request.user,
            ban__lt=datetime.datetime.now()
        )


@api_view(['POST'])
@permission_classes((permissions.IsAuthenticated, ))
def add_view(request, *args, **kwargs):
    try:
        obj = get_object_or_404(Video, id=kwargs.get('pk'))
        obj.views += 1
        obj.save()
        st = status.HTTP_200_OK
    except:
        st = status.HTTP_400_BAD_REQUEST
    return Response(status=st)


@api_view(['POST'])
@permission_classes((permissions.IsAuthenticated, ))
def subscribe_author(request, *args, **kwargs):
    _author = get_object_or_404(get_user_model(), id=kwargs['pk'])
    obj = Subscription.objects.get_or_create(
        author=_author,
        subscriber=request.user
    )[0]
    return Response({
        'subscribed': obj.author.username,
    }, status=status.HTTP_200_OK)


@api_view(['DELETE'])
@permission_classes((permissions.IsAuthenticated, ))
def unsubscribe_author(request, *args, **kwargs):
    _author = get_object_or_404(get_user_model(), id=kwargs['pk'])
    obj = get_object_or_404(Subscription, author=_author, subscriber=request.user)
    obj.delete()
    return Response({
        'unsubscribed': obj.author.username,
    }, status=status.HTTP_200_OK)
