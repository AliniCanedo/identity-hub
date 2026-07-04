import { api, ENDPOINTS } from '@/services';

import type { KycDto } from '../dto';
import type { CreateKycRequestDto } from '../dto';

export class KycService {
  static async list(): Promise<KycDto[]> {
    const { data } = await api.get<KycDto[]>(
      ENDPOINTS.kyc.list,
    );

    return data;
  }

  static async create(
    payload: CreateKycRequestDto,
  ) {
    const { data } = await api.post(
      ENDPOINTS.kyc.list,
      payload,
    );

    return data;
  }
}