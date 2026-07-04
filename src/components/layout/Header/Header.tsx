'use client';

import { Button } from '@/components/ui/Button';
import { useAuth } from '@/features/auth';

import styles from './Header.module.css';

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <h1>Identity Hub</h1>

      {user && (
        <div className={styles.user}>
          <div>
            <strong>{user.name}</strong>

            <p>{user.email}</p>
          </div>

          <Button onClick={logout}>
            Logout
          </Button>
        </div>
      )}
    </header>
  );
}