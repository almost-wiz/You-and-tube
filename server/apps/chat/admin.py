from django.contrib import admin
from .models import *


@admin.register(Chat)
class ChatAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'creator', 'isDuo', 'datetime', )


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'author', 'chat', 'text', 'datetime', )
