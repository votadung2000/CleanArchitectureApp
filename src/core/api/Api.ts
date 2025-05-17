import axios, {
  InternalAxiosRequestConfig,
  AxiosHeaders,
  AxiosResponse,
  AxiosError,
} from 'axios';

import { getToken, clearToken } from '../storages';
import ApiRoutes from './ApiRoutes';

axios.defaults.baseURL = 'http://172.16.28.144:8082/';

axios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const isAuthRoute =
      config.url?.includes(ApiRoutes.login) ||
      config.url?.includes(ApiRoutes.register);

    if (!isAuthRoute) {
      const token = await getToken();
      if (token) {
        if (!config.headers || !(config.headers instanceof AxiosHeaders)) {
          config.headers = new AxiosHeaders();
        }

        config.headers.set('Authorization', `Bearer ${token}`);
      }
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

const logDevError = (error: AxiosError) => {
  if (!error?.response) {
    console.log(error);
    return;
  }

  const { config, status, data } = error.response;
  console.log(`URL: ${config?.url}\nSTATUS: ${status}\n`, data);

  if (
    typeof data === 'object' &&
    data !== null &&
    'error_key' in data &&
    (data as { error_key: string }).error_key === 'ERR_TOKEN_NOT_FOUND'
  ) {
    clearToken();
  } else {
    console.log(`URL: ${config?.url}\nSTATUS: ${status}\nNo error_key found.`);
  }
};

axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    if (__DEV__) {
      logDevError(error);
    }
    return Promise.reject(error);
  },
);

export default axios;
