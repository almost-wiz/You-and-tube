import axios from "axios";
import { getCookie, setCookie, removeCookie } from "../utils/cookie";

export const protocol = "http";
export const server_url = "localhost:8000/api";
export const API_URL = protocol + `://` + server_url;
export const ws_endpoint = (c_id, ticket) =>
  `ws://${server_url}/chats/${c_id}/messages/?ticket_uuid=${ticket}`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getCookie("access")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.post(
          `${API_URL}/auth/jwt/refresh`,
          { refresh: getCookie("refresh") },
          { withCredentials: true }
        );
        setCookie("access", response.data.access);
        return $api.request(originalRequest);
      } catch (e) {
        removeCookie("access");
        removeCookie("refresh");
      }
    }
    throw error;
  }
);

export default $api;
