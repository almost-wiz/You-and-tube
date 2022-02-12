from django.contrib import admin
from .models import *


@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('id', 'author', 'title', 'views', 'archived', 'datetime', )


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'author', 'video', 'text', 'datetime', )


@admin.register(Subscription)
class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ('id', 'author', 'subscriber', 'ban', 'datetime', )
