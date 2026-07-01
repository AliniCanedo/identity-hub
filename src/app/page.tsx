'use client';

import { AppLayout } from '@/components/layout/AppLayout/AppLayout';
import { LoginForm } from '@/features/auth/components/LoginForm';

export default function Home() {
  return (
    <AppLayout>
      <LoginForm />
    </AppLayout>
  );
}