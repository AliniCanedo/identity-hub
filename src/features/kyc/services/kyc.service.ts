import { api, ENDPOINTS } from '@/services';

import type { KycDto } from '../dto';

export class KycService {
  static async list(): Promise<KycDto[]> {
    const { data } = await api.get<KycDto[]>(
      ENDPOINTS.kyc.list,
    );

    return data;
  }
}