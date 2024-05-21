import axios, { AxiosRequestConfig } from 'axios';
import { Base64 } from 'js-base64';
import { checkStatus } from './checkStatus';

const { VITE_GLOB_API_URL } = import.meta.env;

const instance = axios.create({
  baseURL: VITE_GLOB_API_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: `Basic ${Base64.encode(`saber:saber_secret`)}`,
  },
});

/* 请求拦截 */
instance.interceptors.request.use((config: AxiosRequestConfig | any) => {
  const token = '11';
  if (token) {
    config.headers['Blade-Auth'] = `bearer ${token}`;
  }
  return config;
});

/* 响应拦截 */
instance.interceptors.response.use(undefined, (err) => {
  checkStatus(err);
  return Promise.reject(err);
});

export default instance;
