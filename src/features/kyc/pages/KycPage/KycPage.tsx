'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { DataTable } from '@/components/ui/DataTable';
import { SearchInput } from '@/components/ui/SearchInput';

import { useKycList } from '../../hooks';

import styles from './KycPage.module.css';

export function KycPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<
    'ALL' | 'APPROVED' | 'PENDING' | 'REJECTED'
  >('ALL');

  const {
    data = [],
    isLoading,
    isError,
  } = useKycList();

  const filteredData = useMemo(() => {
    const value = search.toLowerCase();

    return data.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(value) ||
        item.document.includes(value);

      const matchesStatus =
        statusFilter === 'ALL' ||
        item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [data, search, statusFilter]);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (isError) {
    return <p>Erro ao carregar validações.</p>;
  }

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Validações</h1>
          <p>Gerencie os processos de validação.</p>
        </div>

        <Button>Novo Processo</Button>
      </header>

      <div className={styles.filters}>
        <SearchInput
          value={search}
          placeholder="Buscar por nome ou documento..."
          onChange={setSearch}
        />

        <select
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(
              event.target.value as
                | 'ALL'
                | 'APPROVED'
                | 'PENDING'
                | 'REJECTED',
            )
          }
        >
          <option value="ALL">
            Todos
          </option>

          <option value="APPROVED">
            Aprovados
          </option>

          <option value="PENDING">
            Pendentes
          </option>

          <option value="REJECTED">
            Rejeitados
          </option>
        </select>
      </div>

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
        data={filteredData}
      />
    </main>
  );
}