import api from "./config";
import { ResponseType } from "axios";
import { defer, map, Observable } from "rxjs";

const get = <T>(
  url: string,
  baseURL: string,
  params?: object,
  responseType: ResponseType = "json",
  token?: string // Change it later??
): Observable<T> => {
  return defer(() => {
    return api(baseURL, token).get<T>(url, { params, responseType });
  }).pipe(map((result) => result.data));
};

const post = <T>(
  url: string,
  body: object,
  baseURL: string,
  params?: object,
  token?: string
): Observable<T | void> => {
  return defer(() => api(baseURL, token).post<T>(url, body, { params })).pipe(
    map((result) => result.data)
  );
};

const put = <T>(
  url: string,
  baseURL: string,
  body: object,
  params?: object,
  token?: string
): Observable<T | void> => {
  return defer(() => api(baseURL, token).put<T>(url, body, { params })).pipe(
    map((result) => result.data)
  );
};

const deleteR = <T>(url: string, baseURL: string): Observable<T | void> => {
  return defer(() => api(baseURL).delete(`${url}`)).pipe(
    map((result) => result.data)
  );
};

const patch = <T>(
  url: string,
  baseURL: string,
  body: object,
  params?: object,
  token?: string
): Observable<T | void> => {
  return defer(() => api(baseURL, token).patch<T>(url, body, { params })).pipe(
    map((result) => result.data)
  );
};

export default { get, post, put, deleteR, patch };
