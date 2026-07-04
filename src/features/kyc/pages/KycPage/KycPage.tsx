'use client';
import { Button } from '@/components/ui/Button';
import { DataTable } from '@/components/ui/DataTable';

import { useKycList } from '../../hooks';

import styles from './KycPage.module.css';

export function KycPage() {
  const {
    data = [],
    isLoading,
    isError,
  } = useKycList();

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

      <DataTable
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
          },
        ]}
        data={data}
      />
    </main>
  );
}