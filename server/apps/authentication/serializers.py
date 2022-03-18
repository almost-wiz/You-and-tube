from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.db.models import Sum

from apps.main.models import Subscription


class UsersSerializer(serializers.ModelSerializer):

    subscribers_count = serializers.SerializerMethodField()
    total_views = serializers.SerializerMethodField()
    is_subscribed = serializers.SerializerMethodField()

    def get_subscribers_count(self, obj):
        return Subscription.objects.filter(author=obj).count()

    def get_total_views(self, obj):
        return get_user_model().objects.annotate(total_views=Sum('video__views')).first().total_views

    def get_is_subscribed(self, obj):
        return Subscription.objects.filter(author=obj, subscriber=self.context['request'].user).exists()

    def __init__(self, *args, **kwargs):
        fields = kwargs.pop('fields', None)
        super(UsersSerializer, self).__init__(*args, **kwargs)
        if fields is not None:
            allowed = set(fields)
            existing = set(self.fields.keys())
            for field_name in existing - allowed:
                self.fields.pop(field_name)

    class Meta:
        model = get_user_model()
        fields = ('id', 'avatar', 'username', 'name', 'phone', 'email', 'date_joined', 'is_staff', 'subscribers_count', 'total_views', 'is_subscribed', )
        read_only_fields = ('is_phone_verified', )


class UserUpdateSerializer(serializers.ModelSerializer):

    name = serializers.CharField(required=False)

    class Meta:
        model = get_user_model()
        fields = ('id', 'avatar', 'name', 'username', )
        read_only_fields = ('id', 'username')


class TokenObtainSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        data['is_phone_verified'] = self.user.is_phone_verified

        if not self.user.is_phone_verified:
            data['phone'] = self.user.phone
            data.pop('access')
            data.pop('refresh')
        else:
            refresh = self.get_token(self.user)
            data['refresh'] = str(refresh)
            data['access'] = str(refresh.access_token)

        return data
