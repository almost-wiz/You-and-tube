import $api from "./";

export default class SettingsService {

  static async update_profile(id, data) {
    return $api.put(`/auth/users/${id}/update/`, data);
  }
}
