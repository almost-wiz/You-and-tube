import $api from "./";

export default class BaseService {

  static async get_user(id) {
    return $api.get(`/auth/users/${id}`);
  }

  static async search_users(search) {
    return $api.get(`/auth/search`, { params: { q: search } });
  }
}
