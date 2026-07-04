import { useQuery } from '@tanstack/react-query';

import { KycService } from '../services';

export function useKycList() {
  return useQuery({
    queryKey: ['kyc-list'],
    queryFn: KycService.list,
  });
}