import { useMutation } from '@tanstack/react-query';

import { AuthService } from '../services';
import { useAuthStore } from '../stores';

export function useLogin() {
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: AuthService.login,

    onSuccess(data) {
      login(data.accessToken, data.refreshToken);
    },
  });
}