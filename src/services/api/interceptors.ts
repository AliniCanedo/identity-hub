import { AxiosError } from 'axios';

import { useAuthStore } from '@/features/auth';

import { ApiErrorHandler } from './handlers';
import { api } from './client';

api.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,

  (error: AxiosError) => ApiErrorHandler.handle(error),
);