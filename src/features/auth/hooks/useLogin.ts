import { useMutation } from '@tanstack/react-query';

import { AuthService } from '../services';
import { useAuthStore } from '../stores';

type UseLoginOptions = {
  onSuccess?: () => void;
};

export function useLogin(options?: UseLoginOptions) {
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: AuthService.login,

    onSuccess(data) {
      login(
        data.user,
        data.accessToken,
        data.refreshToken,
      );

      options?.onSuccess?.();
    },
  });
}