from . import service
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions, status
from rest_framework.response import Response
import re


@api_view(['POST'])
def phone_verification(request):

    phone = request.POST.get('phone', None)

    if not phone or not service.validate_phone(phone):
        return Response({
            'errors': 'Please, type correct phone number'
        }, status=status.HTTP_400_BAD_REQUEST)

    service.send(phone)

    return Response({
        'message': 'Check your phone. If you entered the correct number,' \
                   ' you will receive a confirmation code',
        'errors': 0
    }, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes((permissions.IsAuthenticated, ))
def code_validation(request):

    if request.user.is_phone_verified:
        return Response({
            'errors': 'Your phone already been verified.'
        }, status=status.HTTP_400_BAD_REQUEST)

    phone = request.POST.get('phone', None)
    code = request.POST.get('code', None)

    if not phone or not service.validate_phone(phone):
        return Response({
            'errors': 'Please, type correct phone number.'
        }, status=status.HTTP_400_BAD_REQUEST)
    if not code:
        return Response({
            'errors': 'Please, type correct code.'
        }, status=status.HTTP_400_BAD_REQUEST)

    response = {
        'errors': 'Your code is not right. Try again.',
    }
    _status = status.HTTP_400_BAD_REQUEST

    if service.check(request.user.phone, code):
        request.user.is_phone_verified = True
        request.user.save()
        response = {
            'message': 'Congratulations! you have successfully verified ' \
                       'your phone number!',
            'errors': 0
        }
        _status = status.HTTP_200_OK

    return Response(response, status=_status)
