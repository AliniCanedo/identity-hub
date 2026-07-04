import { Button } from '@/components/ui/Button';

import styles from './KycPage.module.css';

export function KycPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Validações</h1>
          <p>Gerencie os processos de validação.</p>
        </div>

        <Button>
          Novo Processo
        </Button>
      </header>

      <section className={styles.content}>
        Em construção...
      </section>
    </main>
  );
}