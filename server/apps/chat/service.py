from django.db.models.query_utils import Q
from django_filters import rest_framework as filters

from .models import Chat


class ChatFilter(filters.ModelFilter):
    title = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Chat
        fields = ['title']
