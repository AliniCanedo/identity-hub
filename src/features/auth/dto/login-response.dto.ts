import type { AuthUser } from '../types';

export interface LoginResponseDto {
  user: AuthUser;

  accessToken: string;
  refreshToken: string;
}