from rest_framework import serializers
from rest_framework.serializers import ValidationError, SerializerMethodField, ModelSerializer
from django.contrib.auth import get_user_model

from .models import *
from apps.authentication.serializers import UsersSerializer


############    Chat serializers    ############

class ChatRetrieveSerializer(ModelSerializer):

    is_read = SerializerMethodField()
    unread_count = SerializerMethodField()
    display_title = SerializerMethodField()
    creator = UsersSerializer(read_only=True, fields=('id', 'avatar', 'username', ))
    members = UsersSerializer(many=True, read_only=True, fields=('id', 'avatar', 'username', ))

    class Meta:
        model = Chat
        exclude = ('title', )

    def get_is_read(self, obj):
        last_msg = Message.objects.filter(chat=obj.id).last()
        if not last_msg:
            return True
        if self.context['request'].user not in last_msg.unread_users.all():
            return True
        return False

    def get_unread_count(self, obj):
        messages = Message.objects.filter(chat=obj.id).reverse()[:5000]
        if not messages:
            return 0
        count = len([msg for msg in messages if self.context['request'].user in msg.unread_users.all()])
        return count

    def get_display_title(self, obj):
        return obj.get_title(self.context['request'].user.id)


class ChatSerializer(ChatRetrieveSerializer):

    creator = None
    last_message = SerializerMethodField()
    members = UsersSerializer(many=True, read_only=True, fields=('id', 'avatar', ))

    class Meta:
        model = Chat
        exclude = ('creator', 'datetime', 'description', 'title', )

    def get_last_message(self, obj):
        msg = Message.objects.filter(chat=obj.id).values().last()
        if msg is None:
            return None
        author_id = msg.pop('author_id')
        user = get_user_model().objects.filter(id=author_id).values('id', 'username', 'avatar', )[0]
        msg['author'] = user
        return msg


class ChatCreateSerializer(ModelSerializer):

    class Meta:
        model = Chat
        fields = '__all__'
        read_only_fields = ('creator', 'isDuo', )

    def validate_members(self, value):
        if self.context['request'].user not in value:
            value.append(user)
        if len(value) < 2:
            raise ValidationError({'members': 'Members count must be more than 1'})
        if len(value) > 128:
            raise ValidationError({'members': 'Members count must be less than 129'})
        return value

    def validate(self, attrs):
        attrs['title'] = attrs.get('title', 'Title')
        attrs['description'] = attrs.get('description', 'Description')
        attrs['creator'] = self.context['request'].user
        attrs['isDuo'] = True if attrs['members'] == 2 else False
        return attrs


class ChatUpdateSerializer(serializers.ModelSerializer):

    creator = serializers.PrimaryKeyRelatedField(required=False, queryset=get_user_model().objects.all())
    members = serializers.PrimaryKeyRelatedField(required=False, queryset=get_user_model().objects.all(), many=True)

    class Meta:
        model = Chat
        fields = '__all__'
        read_only_fields = ('datetime', 'isDuo', )

    def validate_members(self, value):
        if not len(value):
            return None
        if self.context['request'].user not in value:
            value.append(self.context['request'].user)
        if len(value) < 2:
            raise ValidationError({'members': 'Members count must be more than 1'})
        if len(value) > 128:
            raise ValidationError({'members': 'Members count must be less than 129'})
        return value

    def validate_creator(self, value):
        if value not in self.instance.members.all():
            raise ValidationError({'creator': 'New creator must be in this chat!'})
        return value

    def validate_title(self, value):
        if value == '':
            return 'Title'
        return value

    def validate_description(self, value):
        if value == '':
            return 'Description'
        return value

    def update(self, instance, validated_data):
        if not len(validated_data):
            return instance
        instance.creator = validated_data.get('creator', instance.creator)
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        if validated_data.get('members', None):
            instance.members.set(validated_data['members'])
            instance.isDuo = True if validated_data['members'] == 2 else False
        instance.save()
        return instance


############    Message serializers    ############

class MessageSerializer(ModelSerializer):

    author = UsersSerializer(read_only=True, fields=('id', 'avatar', 'username', ))
    is_read = SerializerMethodField()

    class Meta:
        model = Message
        exclude = ('unread_users', )

    def get_is_read(self, obj):
        if obj.author == self.context['request'].user:
            return True
        if self.context['request'].user not in obj.unread_users.all():
            return True
        return False


class MessageCreateSerializer(ModelSerializer):

    class Meta:
        model = Message
        fields = '__all__'
        read_only_fields = ('author', 'unread_users', 'chat', )

    def create(self, validated_data, *args, **kwargs):
        validated_data['chat'] = self.context['chat']
        validated_data['author'] = self.context['request'].user
        validated_data['unread_users'] = self.context['unread_users']
        return super().create(validated_data, *args, **kwargs)
