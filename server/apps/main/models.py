from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.conf import settings
from django.core import validators
from django.utils import timezone


class Video(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=1000, blank=True, null=True)
    tags = ArrayField(models.CharField(max_length=100, null=True, blank=True), size=10, null=True, blank=True)
    file = models.FileField(
        upload_to='videos/',
        validators=[
            validators.FileExtensionValidator(
                ['mp4'],
                message="File must have .mp4 extension"
            )
        ]
    )
    preview = models.ImageField(upload_to='video_preview/', null=True, blank=True)
    views = models.PositiveIntegerField(default=0)
    archived = models.BooleanField(default=False)
    datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.author.username} - {self.title[:50]}"


class Comment(models.Model):
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    text = models.CharField(max_length=1000)
    datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.video.title[:50]}: {self.author.username} - {self.text[:50]}"


class Subscription(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="sub_author")
    subscriber = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="sub_subscriber")
    ban = models.DateTimeField(default=timezone.now)
    datetime = models.DateTimeField(auto_now_add=True)

    def get_subscribers_count(self):
        return Subscription.objects.filter(author=self.author).count()

    def __str__(self):
        return f"{self.subscriber.username} is following {self.author.username}"
