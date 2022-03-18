from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from .yasg import urlpatterns as doc_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),
    path('api/auth/', include('apps.authentication.urls')),
    path('api/', include('apps.main.urls')),
    path('api/', include('apps.chat.urls')),
]

urlpatterns += doc_urlpatterns

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
