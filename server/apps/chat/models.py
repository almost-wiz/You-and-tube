from django.db import models
from django.conf import settings


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
            return first if second.id == me_id else second
        return self.title


class Message(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)
    isRead = models.BooleanField(default=False)
    datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.author}: {self.text[:50]} in {self.chat.title[:50]}"
