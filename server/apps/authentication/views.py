from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions, status, viewsets
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from djoser.email import ActivationEmail
from django.conf import settings
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404

from . import service
from .permissions import IsUser
from .serializers import TokenObtainSerializer, UserUpdateSerializer, UsersSerializer
from .tasks import send_verification_code


class UsersViewset(viewsets.ModelViewSet):

    filterset_class = service.UserFilter
    permission_classes = (permissions.IsAuthenticated, IsUser, )
    queryset = get_user_model().objects.all()
  
    def get_serializer_class(self):
        if self.action == 'list':
            return UsersSerializer
        elif self.action == 'update':
            return UserUpdateSerializer


@api_view(['POST'])
@permission_classes((permissions.AllowAny, ))
def phone_verification(request):

    phone = request.data.get('phone', None)

    if not phone or not service.validate_phone(phone):
        return Response({
            'error': 'Please, type correct phone number'
        }, status=status.HTTP_400_BAD_REQUEST)

    user = get_object_or_404(get_user_model(), phone=phone)

    if user.is_phone_verified:
        return Response({
            'error': 'Your phone already been verified.'
        }, status=status.HTTP_400_BAD_REQUEST)

    send_verification_code.delay(phone)

    return Response({
        'message': 'Check your phone. If you entered the correct number,' \
                   ' you will receive a confirmation code',
        'error': 0
    }, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes((permissions.AllowAny, ))
def code_validation(request):

    phone = request.data.get('phone', None)
    password = request.data.get('password', None)
    code = request.data.get('code', None)

    if not phone or not password or not code or not service.validate_phone(phone):
        return Response(status=status.HTTP_400_BAD_REQUEST)

    user = get_object_or_404(get_user_model(), phone=phone)

    if user.is_phone_verified:
        return Response({
            'error': 'Your phone already been verified.'
        }, status=status.HTTP_400_BAD_REQUEST)

    response = {
        'error': 'Your code is not right. Try again.',
    }
    _status = status.HTTP_400_BAD_REQUEST

    if service.check_code(user.phone, code):
        user.is_phone_verified = True
        user.save()
        serializer = TokenObtainSerializer(data={'email': user.email, 'password': password})
        serializer.is_valid()
        access = serializer.validated_data['access']
        refresh = serializer.validated_data['refresh']
        response = {
            'message': 'Congratulations! you have successfully verified ' \
                       'your phone number!',
            'auth': {
                'access': access,
                'refresh': refresh
            }
        }
        _status = status.HTTP_200_OK

    return Response(response, status=_status)


class ActivationByEmail(ActivationEmail):
    template_name = 'email_activation.html'

    def get_context_data(self):
        context = super().get_context_data()

        context["client_domain"] = settings.CLIENT_DOMAIN
        return context


class TokenObtainView(TokenObtainPairView):
    serializer_class = TokenObtainSerializer
