import { api, ENDPOINTS } from '@/services';
import {
  LoginRequestDto,
  LoginResponseDto,
} from '../dto';

export class AuthService {
  static async login(
    payload: LoginRequestDto,
  ): Promise<LoginResponseDto> {
    const { data } = await api.post<LoginResponseDto>(
      ENDPOINTS.auth.login,
      payload,
    );

    return data;
  }
}