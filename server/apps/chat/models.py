from django.db import models
from django.conf import settings
from rest_framework.generics import get_object_or_404


class Chat(models.Model):
    title = models.CharField(max_length=100, blank=True, null=True)
    description = models.CharField(max_length=300, blank=True, null=True)
    isDuo = models.BooleanField(default=True)
    members = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='chat_members')
    creator = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="chat_creator")
    datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title}: {self.creator}"

    def get_title(self, me_id):
        if self.isDuo:
            first, second = self.members.all()
            return first.username if second.id == me_id else second.username
        return self.title


class MessageManager(models.Manager):

    def mark_read(self, msg_id, me):
        message = get_object_or_404(self, pk=msg_id)
        before = message.unread_users.all()
        after = [b for b in before if b != me]
        message.unread_users.set(after)


class Message(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='msg_author')
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)
    text = models.TextField(max_length=5000)
    unread_users = models.ManyToManyField(settings.AUTH_USER_MODEL, null=True, blank=True, related_name='unread_users')
    datetime = models.DateTimeField(auto_now_add=True)

    objects = MessageManager()

    def __str__(self):
        return f"{self.author.username}: {self.text[:50]} in {self.chat.title}"
