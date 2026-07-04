import { CardProps } from './Card.types';

import styles from './Card.module.css';

export function Card({
  title,
  children,
}: CardProps) {
  return (
    <section className={styles.card}>
      <header className={styles.header}>
        <h3>{title}</h3>
      </header>

      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}