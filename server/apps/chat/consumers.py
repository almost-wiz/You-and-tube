import json
from asgiref.sync import sync_to_async
from channels.generic.websocket import AsyncConsumer
from channels.db import database_sync_to_async
from urllib.parse import parse_qsl
from django.core.cache import cache
from django.contrib.auth import get_user_model

from .models import Chat, Message
from .tasks import send_message_action


class ChatConsumer(AsyncConsumer):

    async def websocket_connect(self, event):
        try:
            query_string = self.scope['query_string'].decode('utf-8')
            query_params = dict(parse_qsl(query_string))
            ticket_uuid = query_params.get('ticket_uuid')
            user_id = await self.get_ticket(ticket_uuid)
            if not self.delete_ticket(ticket_uuid):
                raise Exception('ticket not found')
            await self.scope_c(user_id)
        except:
            return

        chat_id = self.scope['url_route']['kwargs']['chat_id']


        self.chat_obj = await self.get_chat(chat_id)
        self.chat_room = 'chat_%s' % self.chat_obj.id

        await self.channel_layer.group_add(
            self.chat_room,
            self.channel_name,
        )

        await self.send({
            'type': 'websocket.accept',
        })

    async def websocket_receive(self, event):

        front_text = event.get('text', None)
        if front_text is None:
            return

        msg_text = json.loads(front_text).get('message')

        message_obj = await self.create_message(
            self.chat_obj,
            self.scope['user'],
            msg_text
        )
        send_message_action.apply_async([message_obj.id], countdown=(3600*24))

        response = {
            'message': {
                'id': message_obj.id,
                'author': {
                    'id': message_obj.author.id,
                    'username': message_obj.author.username,
                },
                'text': message_obj.text,
                'datetime': message_obj.datetime,
            }
        }

        await self.channel_layer.group_send(
            self.chat_room,
            {
                'type': 'chat.message.send',
                'text': json.dumps(response, indent=4, sort_keys=True, default=str),
            }
        )

    async def websocket_disconnect(self, event):
        await self.channel_layer.group_discard(
            self.chat_room,
            self.channel_name
        )

    async def chat_message_send(self, event):
        await self.send({
            'type': 'websocket.send',
            'text': event['text'],
        })

    @sync_to_async
    def delete_ticket(self, ticket_uuid):
        return cache.delete(ticket_uuid)

    @sync_to_async
    def get_ticket(self, ticket_uuid):
        return cache.get(ticket_uuid)

    @sync_to_async
    def scope_c(self, user_id):
        self.scope['user'] = get_user_model().objects.get(pk=user_id)

    @database_sync_to_async
    def get_chat(self, chat_id):
        return Chat.objects.get(pk=chat_id)

    @database_sync_to_async
    def create_message(self, chat_obj, user, msg_text):
        unread_users = chat_obj.members.exclude(id=self.scope['user'].id)
        msg = Message.objects.create(
            chat=chat_obj,
            author=user,
            text=msg_text,
        )
        msg.unread_users.set(unread_users)
        msg.save()
        return msg
