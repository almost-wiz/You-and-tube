from django.urls import path
from .views import *

urlpatterns = [
    path('activation/phone/', phone_verification),
    path('activation/code_validation/', code_validation),
    path('token/', TokenObtainView.as_view()),
    path('search/', UsersViewset.as_view({'get': 'list'})),
    path('users/<int:pk>/update/', UsersViewset.as_view({'put':'update'})),
]
