from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from .yasg import urlpatterns as doc_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('apps.authentication.urls')),
    path('api/v1/', include('apps.main.urls')),
    path('api/v1/', include('apps.chat.urls')),
]

urlpatterns += doc_urlpatterns

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
