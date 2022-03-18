import $api from "./";

export default class VideosService {

  static async add_view(id) {
    return $api.post(`/videos/${id}/views/add/`);
  }

  static async get_video(id) {
    return $api.get(`/videos/${id}`);
  }

  static async add_video(params) {
    return $api.post(`/videos/add/`, params);
  }

  static async edit_video(id, params) {
    return $api.put(`/videos/${id}/update/`, params);
  }

  static async remove_video(id) {
    return $api.delete(`/videos/${id}/delete/`);
  }

  static async get_videos(params) {
    return $api.get(`/videos`, { params: params });
  }

  static async get_comments(id, params) {
    return $api.get(`/videos/${id}/comments`, { params: params });
  }

  static async add_comment(id, params) {
    return $api.post(`/videos/${id}/comments/add/`, params);
  }

  static async get_subscriptions(params) {
    return $api.get(`/subscriptions`, { params: params });
  }

  static async subscribe(id) {
    return $api.post(`/authors/${id}/subscribe/`);
  }

  static async unsubscribe(id) {
    return $api.delete(`/authors/${id}/unsubscribe/`);
  }
}
