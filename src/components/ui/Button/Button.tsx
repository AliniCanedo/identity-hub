import { ButtonProps } from './Button.types';
import styles from './Button.module.css';

export function Button({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  );
}