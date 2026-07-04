import { api, ENDPOINTS } from '@/services';

import type { KycDto } from '../dto';
import type { CreateKycRequestDto } from '../dto';
import type { KycDetailsDto } from '../dto';

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

  static async upload(file: File) {
    const formData = new FormData();

    formData.append('file', file);

    const { data } = await api.post(
      ENDPOINTS.kyc.upload,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    return data;
  }

  static async details(id: string) {
    const { data } =
      await api.get<KycDetailsDto>(
        ENDPOINTS.kyc.details(id),
      );

    return data;
  }
}