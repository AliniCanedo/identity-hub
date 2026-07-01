import { ReactNode } from 'react';

import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';

import styles from './AppLayout.module.css';

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <Sidebar />

        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  );
}