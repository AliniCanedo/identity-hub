'use client';

import Link from 'next/link';

import styles from './NewKycPage.module.css';

export function NewKycPage() {
  return (
    <main className={styles.container}>
      <Link href="/kyc">
        ← Voltar
      </Link>

      <h1>Nova Validação</h1>

      <p>
        Nesta tela criaremos um novo processo
        de validação.
      </p>
    </main>
  );
}