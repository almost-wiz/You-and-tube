from django.urls import include, path
from .views import *

urlpatterns = [
    path('videos/', VideoViewset.as_view({'get': 'list'})),
    path('videos/add/', VideoViewset.as_view({'post': 'create'})),
    path('videos/<int:pk>/', VideoViewset.as_view({'get': 'retrieve'})),
    path('videos/<int:pk>/update/', VideoViewset.as_view({'put': 'update'})),
	path('videos/<int:pk>/delete/', VideoViewset.as_view({'delete': 'destroy'})),
	path('videos/<int:pk>/views/add/', add_view),

    path('videos/<int:pk>/comments/', CommentViewset.as_view({'get': 'list'})),
    path('videos/<int:pk>/comments/add/', CommentViewset.as_view({'post': 'create'})),
	path('comments/<int:pk>/delete/', CommentViewset.as_view({'delete': 'destroy'})),

    path('subscriptions/', SubscriptionViewset.as_view({'get': 'list'})),
    path('authors/<int:pk>/subscribe/', subscribe_author),
    path('authors/<int:pk>/unsubscribe/', unsubscribe_author),
]
