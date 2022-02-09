from rest_framework import serializers
from django.contrib.auth import get_user_model


class UsersSerializer(serializers.ModelSerializer):
    """Return users list"""

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
        fields = ('id', 'avatar', 'username', 'name', 'phone', 'date_joined', 'is_staff', )
        read_only_fields = ('is_phone_verified', )
