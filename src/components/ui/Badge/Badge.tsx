import type { BadgeProps } from './Badge.types';

import styles from './Badge.module.css';

export function Badge({
  children,
  variant,
}: BadgeProps) {
  return (
    <span
      className={`${styles.badge} ${styles[variant]}`}
    >
      {children}
    </span>
  );
}