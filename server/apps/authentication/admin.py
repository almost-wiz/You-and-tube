from django.contrib import admin
from .models import *


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'email',
        'username',
        'phone',
        'is_phone_verified',
        'is_staff',
        'is_superuser',
        'date_joined',
    )
