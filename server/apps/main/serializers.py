from rest_framework.serializers import SerializerMethodField, ModelSerializer, ValidationError

from .models import *
from apps.authentication.serializers import UsersSerializer


# Serializers for the Video model

class VideoSerializer(ModelSerializer):

	author = UsersSerializer(fields=('id', 'avatar', 'username'))

	class Meta:
		model = Video
		exclude = ('file', 'archived', )


class VideoRetrieveSerializer(ModelSerializer):

	author = UsersSerializer(fields=('id', 'avatar', 'username', 'is_subscribed', 'subscribers_count', ))

	class Meta:
		model = Video
		fields = '__all__'


class VideoCreateSerializer(ModelSerializer):

    def validate(self, attrs):
        attrs['author'] = self.context['request'].user
        return attrs

    class Meta:
        model = Video
        fields = '__all__'
        read_only_fields = ('author', 'views', )


class VideoUpdateSerializer(ModelSerializer):

	def update(self, instance, validated_data):

		if not validated_data.get('tags', None):
			instance.tags = []

		return super().update(instance, validated_data)

	class Meta:
		model = Video
		fields = ('title', 'description', 'tags', 'archived', )


# Serializers for the Comment model

class CommentSerializer(ModelSerializer):

	author = UsersSerializer(fields=('id', 'avatar', 'username'))

	class Meta:
		model = Comment
		exclude = ('video', )


class CommentCreateSerializer(ModelSerializer):

	def validate(self, attrs):
		attrs['author'] = self.context['request'].user
		attrs['video'] = self.context['video']
		return attrs

	class Meta:
		model = Comment
		fields = '__all__'
		read_only_fields = ('author', 'video', )


# Serializer for the Subscription model

class SubscriptionSerializer(ModelSerializer):

	author = UsersSerializer(fields=('id', 'avatar', 'username'))
	subscribers_count = SerializerMethodField()

	class Meta:
		model = Subscription
		exclude = ('subscriber', 'datetime', )

	def get_subscribers_count(self, obj):
		return obj.get_subscribers_count()
