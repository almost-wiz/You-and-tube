from django.db.models.query_utils import Q
from django_filters import rest_framework as filters

from .models import Video


class VideoFilter(filters.FilterSet):
    q = filters.CharFilter(method='search')

    class Meta:
        model = Video
        fields = ['q']

    def search(self, queryset, name, value):
        return Video.objects.filter(
            Q(title__icontains=value) |
            Q(description__icontains=value) |
            Q(tags__icontains=value)
        )
