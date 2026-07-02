import { AppLayout } from '@/components/layout/AppLayout/AppLayout';
import { LoginForm } from '@/features/auth/components/LoginForm';

export default function LoginPage() {
  return (
    <AppLayout>
      <LoginForm />
    </AppLayout>
  );
}