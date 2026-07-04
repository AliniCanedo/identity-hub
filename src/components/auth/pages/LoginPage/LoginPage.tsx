import { LoginForm } from '@/features/auth/components/LoginForm';

import styles from './LoginPage.module.css';

export function LoginPage() {
  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <h1>Identity Hub</h1>

        <p>Entre para continuar.</p>

        <LoginForm />
      </section>
    </main>
  );
}