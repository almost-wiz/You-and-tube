import os
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator
from django.core.asgi import get_asgi_application
import apps.chat.routing as routing


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'you_and_tube.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": URLRouter(
            routing.websocket_urlpatterns
        )
})
