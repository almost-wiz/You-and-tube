from django.urls import include, path
from .views import *

urlpatterns = [
    path('activation/phone/', phone_verification),
    path('activation/code_validation/', code_validation),
]
