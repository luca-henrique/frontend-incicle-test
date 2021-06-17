import axios from "axios";
import { store } from "../store/index";

const baseURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;
  const headers = { ...config.headers };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return { ...config, headers };
});

export default api;
