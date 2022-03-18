from django.db.models.query_utils import Q
from django_filters import rest_framework as filters
from .models import Chat


class ChatFilter(filters.FilterSet):
    q = filters.CharFilter(method='search')

    class Meta:
        model = Chat
        fields = ['q']

    def search(self, queryset, name, value):
        return Chat.objects.filter(
            Q(title__icontains=value) |
            Q(description__icontains=value) |
            Q(members__username__icontains=value) |
            Q(members__name__icontains=value)
        ).distinct()
