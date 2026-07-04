import { api, ENDPOINTS } from '@/services';

import { DashboardSummaryDto } from '../dto';

export class DashboardService {
  static async getSummary(): Promise<DashboardSummaryDto> {
    const { data } = await api.get<DashboardSummaryDto>(
      ENDPOINTS.dashboard.summary,
    );

    return data;
  }
}