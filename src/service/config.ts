// Axios Config
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { Toasts } from "../utils/toasts";
import app from "../main";

function apiConfig(baseUrl: string, token?: string): AxiosRequestConfig {
  const config: AxiosRequestConfig = {
    baseURL: baseUrl,
    headers: {}
  }

  if(token !== "") {
    console.log(process.env);
    console.log(import.meta.env); 
    config.headers!.Authorization = token ? `Bearer ${token}` : `Bearer ${process.env.VITE_BEARER_TOKEN}`;
  }


  return config
}

function initAxios(config: AxiosRequestConfig): AxiosInstance {

 const showToast = new Toasts()
  
  const defineInstance = axios.create(config);
  defineInstance.interceptors.request.use(
    (request: AxiosRequestConfig): any => {
      return request;
    },
    (error) => {
      app.config.globalProperties.$toast.add(showToast.error() as any)
      return Promise.reject(error)}
  );

  defineInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      app.config.globalProperties.$toast.add(showToast.error() as any)
      
      
      
      
      return Promise.reject(error);
    }
  );

  return defineInstance;
}

function api(baseURL: string, token?: string) {
  return initAxios(apiConfig(baseURL, token));
}

export default api;
