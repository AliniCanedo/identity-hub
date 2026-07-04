import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { AppLayout } from '@/components/layout/AppLayout/AppLayout';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <AppLayout>
        <h2>Dashboard</h2>

        <p>Bem-vinda ao Identity Hub.</p>
      </AppLayout>
    </ProtectedRoute>
  );
}