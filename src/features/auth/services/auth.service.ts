
import { api } from '@/services';

import type {
  LoginRequest,
  LoginResponse,
} from './auth.types';

export class AuthService {
  static async login(
    payload: LoginRequest,
  ): Promise<LoginResponse> {
    const { data } = await api.post<LoginResponse>(
      '/auth/login',
      payload,
    );

    return data;
  }
}