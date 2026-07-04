import { useQuery } from '@tanstack/react-query';

import { KycService } from '../services';

export function useKycDetails(id: string) {
  return useQuery({
    queryKey: ['kyc-details', id],
    queryFn: () => KycService.details(id),
  });
}