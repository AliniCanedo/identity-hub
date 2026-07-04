import { useMutation } from '@tanstack/react-query';

import { KycService } from '../services';

export function useCreateKyc() {
  return useMutation({
    mutationFn: KycService.create,
  });
}