'use client';

import { Card } from '@/components/ui/Card';
import { useDashboardSummary } from '@/features/dashboard';

export default function DashboardPage() {
  const { data, isLoading, isError } = useDashboardSummary();

  return (
    <>
      <h1>Dashboard</h1>

      <Card title="Resumo">
        {isLoading && <p>Carregando...</p>}

        {isError && (
          <p>Erro ao carregar os dados.</p>
        )}

        {data && (
          <>
            <p>Total de usuários: {data.totalUsers}</p>

            <p>
              Validações pendentes:
              {' '}
              {data.pendingValidations}
            </p>

            <p>
              Aprovadas hoje:
              {' '}
              {data.approvedToday}
            </p>
          </>
        )}
      </Card>
    </>
  );
}