'use client';

import { useRouter } from 'next/navigation';

import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import { KycService } from '../services';

export function useCreateKyc() {
  const router = useRouter();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: KycService.create,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['kyc-list'],
      });

      router.push('/kyc');
    },
  });
}