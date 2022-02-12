import os
from celery import Celery


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'you_and_tube.settings')

app = Celery('you_and_tube')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()
