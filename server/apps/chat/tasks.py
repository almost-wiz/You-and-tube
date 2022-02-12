from django.core.mail import send_mail
from django.conf import settings
from you_and_tube.celery import app
from .models import Message


def send(receiver):
    send_mail(
        'You have unread messages',
        'You don\'t read messages for a long time, please fix it :D',
        settings.EMAIL_HOST_USER,
        receiver,
        fail_silently=True,
    )


@app.task
def send_message_action(msg_id):
    try:
        msg = Message.objects.get(pk=msg_id)
    except:
        return False
    receiver = list(map(
        lambda x: x.email,
        filter(lambda x: x.id != msg.author.id, msg.unread_users.all())
    ))
    if len(receiver):
        return send(receiver)
    return False
