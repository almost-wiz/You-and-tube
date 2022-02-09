from django.db.models.query_utils import Q
from .models import Chat
import django_filters


class ChatFilter(django_filters.FilterSet):
    title = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Chat
        fields = ['title']
