import { makeAutoObservable } from "mobx";
import { setCookie, removeCookie, getCookie } from "../utils/cookie";
import LoginService from "../API/LoginService";
import BaseService from "../API/BaseService";
import SettingsService from "../API/SettingsService";
import VideosService from "../API/VideosService";

export class Store {
  user = {};
  proceed_phone_verification = false;
  isLoading = true;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setLoading(bool) {
    this.isLoading = bool;
  }

  setUser(user) {
    this.user = user;
  }

  setProceedPhoneVerification(bool) {
    this.proceed_phone_verification = bool;
  }

  async get_user(id = "me") {
    const response = await BaseService.get_user(id);
    if (id === "me") {
      this.setUser({ ...response.data });
    } else {
      return response;
    }
  }

  async login(email, password) {
    const response = await LoginService.login(email, password);
    if (response.data.is_phone_verified) {
      setCookie("access", response.data.access);
      setCookie("refresh", response.data.refresh);
      this.setAuth(true);
    } else {
      this.setUser({
        phone: response.data.phone,
        password: password,
      });
      this.setProceedPhoneVerification(true);
    }
  }

  logout() {
    removeCookie("access");
    removeCookie("refresh");
    this.setUser({});
    this.setProceedPhoneVerification(false);
    this.setAuth(false);
  }

  async checkAuth() {
    this.setLoading(true);
    try {
      const response = await LoginService.isAccessAllowed(getCookie("refresh"));
      setCookie("access", response.data.access);
      this.setAuth(true);
    } catch (e) {
      this.logout();
    } finally {
      this.setLoading(false);
      return this.isAuth;
    }
  }

  async validate_code(phone, code, password) {
    const response = await LoginService.validate_code(phone, code, password);
    setCookie("access", response.data.auth.access);
    setCookie("refresh", response.data.auth.refresh);
    this.setProceedPhoneVerification(false);
    this.setAuth(true);
  }

  async update_profile(data) {
    const response = await SettingsService.update_profile(this.user.id, data);
    this.setUser({
      ...this.user,
      avatar: response.data.avatar,
      name: response.data.name,
    });
  }

  async get_video(id, mode = false) {
    const response = await VideosService.get_video(id);
    if (response.data.tags && mode !== "edit") {
      response.data.tags = response.data.tags.map((t) => "#" + t).join("");
    } else if (response.data.tags && mode === "edit") {
      response.data.tags = response.data.tags.join(",");
    }
    return response;
  }

  async add_video(data) {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    if (data.tags) {
      formData.append("tags", this.validate_tags(data.tags), "");
    }
    formData.append("preview", data.preview);
    formData.append("file", data.video);
    formData.append("archived", data.archived);
    return await VideosService.add_video(formData);
  }

  async edit_video(id, data) {
    if (data.tags) {
      data.tags = this.validate_tags(data.tags);
    }
    return await VideosService.edit_video(id, data);
  }

  validate_tags(tags) {
    const tagsArr = tags.split(",");
    return tagsArr.map((i) => i.trim());
  }
}
