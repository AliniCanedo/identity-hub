import { DataTable } from '@/components/ui/DataTable';
import styles from './KycPage.module.css';
import { Button } from '@/components/ui/Button';

type Validation = {
  name: string;
  document: string;
  status: string;
};

const data: Validation[] = [
  {
    name: 'João Silva',
    document: '123.456.789-00',
    status: 'Aprovado',
  },
  {
    name: 'Maria Souza',
    document: '987.654.321-00',
    status: 'Pendente',
  },
];

export function KycPage() {
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