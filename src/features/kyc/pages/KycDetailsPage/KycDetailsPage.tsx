'use client';

import Link from 'next/link';

import { Badge } from '@/components/ui/Badge';

import { useKycDetails } from '@/features/kyc';

import styles from './KycDetailsPage.module.css';

type Props = {
  id: string;
};

export function KycDetailsPage({
  id,
}: Props) {
  const {
    data,
    isLoading,
    isError,
  } = useKycDetails(id);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (isError || !data) {
    return <p>Erro ao carregar validação.</p>;
  }

  return (
    <main className={styles.container}>
      <Link href="/kyc">
        ← Voltar
      </Link>

      <h1>Validação #{data.id}</h1>

      <section className={styles.card}>
        <p>
          <strong>Nome:</strong> {data.name}
        </p>

        <p>
          <strong>Documento:</strong> {data.document}
        </p>

        <p>
          <strong>Tipo:</strong> {data.documentType}
        </p>

        <p>
          <strong>Status:</strong>{' '}
          <Badge
            variant={
              data.status === 'APPROVED'
                ? 'success'
                : data.status === 'PENDING'
                  ? 'warning'
                  : 'danger'
            }
          >
            {data.status}
          </Badge>
        </p>
      </section>
    </main>
  );
}