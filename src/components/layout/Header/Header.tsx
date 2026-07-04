'use client';

import { Button } from '@/components/ui/Button';

import styles from './Header.module.css';
import {
  useAuth,
  useAuthActions,
} from '@/features/auth';

export function Header() {
const { user } = useAuth();
const { signOut } = useAuthActions();

  return (
    <header className={styles.header}>
      <h1>Identity Hub</h1>

      {user && (
        <div className={styles.user}>
          <div>
            <strong>{user.name}</strong>

            <p>{user.email}</p>
          </div>

          <Button onClick={signOut} variant="secondary">
            Logout
          </Button>
        </div>
      )}
    </header>
  );
}