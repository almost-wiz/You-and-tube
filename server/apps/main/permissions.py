from rest_framework import permissions
from .models import Subscription
from django.utils import timezone


class IsAuthorOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.author == request.user


class IsAccessAllowed(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        try:
            sub = Subscription.objects.get(author=obj.author, subscriber=view.request.user)
        except:
            return True
        return sub.ban < timezone.now()
