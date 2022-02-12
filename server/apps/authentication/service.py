from twilio.rest import Client
from twilio.base.exceptions import TwilioRestException
from django.conf import settings
import re


client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
verify = client.verify.services(settings.TWILIO_VERIFY_SERVICE_SID)


def send_code(phone):
    verify.verifications.create(to=phone, channel='sms')


def check_code(phone, code):
    try:
        result = verify.verification_checks.create(to=phone, code=code)
    except TwilioRestException:
        return False
    return result.status == 'approved'


def validate_phone(phone):
    return re.search(r'^\+?1?\d{9,15}$', phone)
