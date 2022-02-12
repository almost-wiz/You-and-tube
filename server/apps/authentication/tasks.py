from you_and_tube.celery import app

from .service import send_code

@app.task
def send_verification_code(phone):
    send_code(phone)
