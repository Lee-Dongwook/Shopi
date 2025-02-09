import axios from 'axios';

import {api} from './routes.constants';

export const http = axios.create({
  baseURL: api.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface IAccessUser {
  token: string;
}

http.interceptors.request.use(async (config) => {
  const accessUser: IAccessUser = JSON.parse(
    localStorage.getItem('access_token')
  );

  if (accessUser) {
    config.headers.common.Authorization = `Bearer ${accessUser.token}`;
  }

  return config;
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear();
    }

    console.log('request error', error);

    if (!error.response) {
      error.response = {data: {genericError: error}};
    }

    return Promise.reject(error);
  }
);
