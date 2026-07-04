import { useMutation } from '@tanstack/react-query';

import { KycService } from '../services';

export function useUploadDocument() {
  return useMutation({
    mutationFn: KycService.upload,
  });
}