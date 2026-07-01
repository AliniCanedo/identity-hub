import { InputProps } from './Input.types';
import styles from './Input.module.css';

export function Input({
  label,
  error,
  id,
  ...props
}: InputProps) {
  return (
    <div className={styles.container}>
      {label && (
        <label
          htmlFor={id}
          className={styles.label}
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={styles.input}
        {...props}
      />

      {error && (
        <span className={styles.error}>
          {error}
        </span>
      )}
    </div>
  );
}