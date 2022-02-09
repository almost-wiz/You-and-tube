from rest_framework import permissions
from rest_framework.generics import get_object_or_404
from .models import Chat


class IsChatMember(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.user in obj.members.all():
            return True


class IsChatOwnerOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        print('as')
        if request.method in permissions.SAFE_METHODS:
            return True
        if obj.isDuo:
            return True
        return obj.creator == request.user


class CanViewMessage(permissions.BasePermission):

    def has_permission(self, request, view):
        chat_id = view.kwargs.get('chat_id', None)
        chat = get_object_or_404(Chat, id=chat_id)
        if request.user in chat.members.all():
            return True
        return False

    def has_object_permission(self, request, view, obj):
        return self.has_permission(request, view)


class IsAuthorOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.author == request.user
