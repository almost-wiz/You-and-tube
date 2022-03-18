import $api from "./";

export default class ChatsService {

  static async get_chat(id) {
    return $api.get(`/chats/${id}`);
  }

  static async get_chat_ticket() {
    return $api.get(`/chats/ticket/get`);
  }

  static async mark_message_read(chat_id) {
    return $api.put(`/chats/${chat_id}/messages/mark-read/`);
  }

  static async get_chats(params) {
    return $api.get(`/chats/`, { params: params });
  }

  static async up_chat_member(chat, id) {
    return $api.put(`/chats/${chat.id}/update/`, {
      creator: id,
    });
  }

  static async remove_chat_member(chat, id) {
    return $api.put(`/chats/${chat.id}/update/`, {
      members: chat.members.filter((i) => i.id !== id).map((i) => i.id),
    });
  }

  static async leave_chat(id) {
    return $api.put(`/chats/${id}/leave/`);
  }

  static async start_chat(params) {
    return $api.post(`/chats/create/`, params);
  }

  static async get_messages(id) {
    return $api.get(`/chats/${id}/messages`);
  }
}
