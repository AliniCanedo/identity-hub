import { AxiosError } from 'axios';

import { useAuthStore } from '@/features/auth';

import { ApiErrorHandler } from './handlers';
import { api } from './client';
import { redirectToLogin } from '../navigation/navigation';

api.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,

  (error: AxiosError) => {
    if (error.response?.status === 401) {
      const { logout } = useAuthStore.getState();

      logout();

      redirectToLogin();
    }

    return ApiErrorHandler.handle(error);
  },
);