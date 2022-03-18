from twilio.rest import Client
from twilio.base.exceptions import TwilioRestException
from django.conf import settings
from django.contrib.auth import get_user_model
from django.db.models.query_utils import Q
from django_filters import rest_framework as filters
import re


client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
verify = client.verify.services(settings.TWILIO_VERIFY_SERVICE_SID)


class UserFilter(filters.FilterSet):
    q = filters.CharFilter(method='search')

    class Meta:
        model = get_user_model()
        fields = ['q']

    def search(self, queryset, name, value):
        return get_user_model().objects.filter(
            Q(username__icontains=value) | Q(name__icontains=value)
        )


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
