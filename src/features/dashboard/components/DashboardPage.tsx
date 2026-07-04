import { DashboardSummary } from '../components/DashboardSummary/DashboardSummary';

import styles from './DashboardPage.module.css';

export function DashboardPage() {
  return (
    <main className={styles.container}>
      <h1>Dashboard</h1>

      <DashboardSummary />
    </main>
  );
}