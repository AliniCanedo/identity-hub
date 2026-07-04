'use client';

import Link from 'next/link';

import { Badge } from '@/components/ui/Badge';
import { DataTable } from '@/components/ui/DataTable';

import type { KycDto } from '../../dto';

type Props = {
  data: KycDto[];
};

export function KycTable({
  data,
}: Props) {
  return (
    <DataTable
      rowKey="id"
      columns={[
        {
          key: 'name',
          header: 'Nome',
        },
        {
          key: 'document',
          header: 'Documento',
        },
        {
          key: 'status',
          header: 'Status',
          render: (value) => {
            switch (value) {
              case 'APPROVED':
                return (
                  <Badge variant="success">
                    Aprovado
                  </Badge>
                );

              case 'PENDING':
                return (
                  <Badge variant="warning">
                    Pendente
                  </Badge>
                );

              case 'REJECTED':
                return (
                  <Badge variant="danger">
                    Rejeitado
                  </Badge>
                );

              default:
                return String(value);
            }
          },
        },
        {
          key: 'id',
          header: 'Ações',
          render: (_, row) => (
            <Link href={`/kyc/${row.id}`}>
              Visualizar
            </Link>
          ),
        },
      ]}
      data={data}
    />
  );
}