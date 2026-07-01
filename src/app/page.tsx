'use client';

import { AppLayout } from '@/components/layout/AppLayout/AppLayout';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <AppLayout>
      <h2>Dashboard</h2>

      <Button>Salvar</Button>

      <br />
      <br />

      <Button variant="secondary">
        Cancelar
      </Button>
    </AppLayout>
  );
}