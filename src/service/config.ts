// Axios Config
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

function apiConfig(baseUrl: string, token?: string): AxiosRequestConfig {
  const config: AxiosRequestConfig = {
    baseURL: baseUrl,
    headers: {}
  }

  config.headers!.Authorization = `Bearer ${token}` || `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`

  return config
}

function initAxios(config: AxiosRequestConfig): AxiosInstance {

  const defineInstance = axios.create(config);
  defineInstance.interceptors.request.use(
    (request: AxiosRequestConfig): any => {
      return request;
    },
    (error) => Promise.reject(error)
  );

  defineInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      alert(error);
      return Promise.reject(error);
    }
  );

  return defineInstance;
}

function api(baseURL = "/api", token?: string) {
  return initAxios(apiConfig(baseURL, token));
}

export default api;
