'use client';

import Link from 'next/link';

import styles from './KycDetailsPage.module.css';

type Props = {
  id: string;
};

export function KycDetailsPage({
  id,
}: Props) {
  return (
    <main className={styles.container}>
      <Link href="/kyc">
        ← Voltar
      </Link>

      <header className={styles.header}>
        <h1>Validação #{id}</h1>
      </header>

      <section className={styles.card}>
        <h2>Informações</h2>

        <p>Nome:</p>

        <p>Documento:</p>

        <p>Status:</p>
      </section>

      <section className={styles.card}>
        <h2>Documentos</h2>
      </section>

      <section className={styles.card}>
        <h2>Timeline</h2>
      </section>
    </main>
  );
}