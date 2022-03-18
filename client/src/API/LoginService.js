import axios from "axios";
import { API_URL } from "./";

export default class LoginService {

  static async login(email, password) {
    return axios.post(API_URL + "/auth/token/", { email, password });
  }

  static async signup(name, username, email, phone, password) {
    return axios.post(API_URL + "/auth/users/", {
      name,
      username,
      email,
      phone,
      password,
    });
  }

  static async isAccessAllowed(refresh) {
    return axios.post(API_URL + "/auth/jwt/refresh/", { refresh });
  }

  static async activateUser(uid, token) {
    return axios.post(API_URL + "/auth/users/activation/", { uid, token });
  }

  static async send_code(phone) {
    return axios.post(API_URL + "/auth/activation/phone/", { phone });
  }

  static async validate_code(phone, code, password) {
    return axios.post(API_URL + "/auth/activation/code_validation/", {
      phone,
      code,
      password,
    });
  }
}
