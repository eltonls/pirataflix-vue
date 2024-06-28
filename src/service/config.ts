// Axios Config
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
//import { Verify } from "../utils/toasts";
import { Toasts } from "../utils/toasts";
import app from "../main";
import { useToast } from "primevue/usetoast";

function apiConfig(baseUrl: string, token?: string): AxiosRequestConfig {
  const config: AxiosRequestConfig = {
    baseURL: baseUrl,
    headers: {}
  }

  config.headers!.Authorization = token ? `Bearer ${token}` : `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`;


  return config
}

function initAxios(config: AxiosRequestConfig): AxiosInstance {
 // const verify = new Verify()
 //const toast =  useToast()
 const showToast = new Toasts()
  
  const defineInstance = axios.create(config);
  defineInstance.interceptors.request.use(
    (request: AxiosRequestConfig): any => {
      return request;
    },
    (error) => {

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

function api(baseURL = "/api", token?: string) {
  return initAxios(apiConfig(baseURL, token));
}

export default api;