from django.urls import path
from . import views

urlpatterns = [
    path('chats/', views.ChatsViewset.as_view({'get': 'list'})),
    path('chats/create/', views.ChatsViewset.as_view({'post': 'create'})),
    path('chats/<int:pk>/', views.ChatsViewset.as_view({'get': 'retrieve'})),
    path('chats/<int:pk>/leave/', views.leave_chat.as_view()),
    path('chats/<int:pk>/update/', views.ChatsViewset.as_view({'put': 'update'})),
    path('chats/<int:pk>/delete/', views.ChatsViewset.as_view({'delete': 'destroy'})),

    path('chats/ticket/get/', views.ChatTicketAPIView.as_view()),
    path('chats/<int:chat_id>/messages/', views.MessageViewset.as_view({'get': 'list'})),
    # path('chats/<int:chat_id>/messages/create/', views.MessageViewset.as_view({'post': 'create'})),
    # path('chats/<int:chat_id>/messages/<int:pk>/delete/', views.MessageViewset.as_view({'delete': 'destroy'})),
    path('chats/<int:chat_id>/messages/mark-read/', views.MessageViewset.as_view({'put': 'update'})),
]
