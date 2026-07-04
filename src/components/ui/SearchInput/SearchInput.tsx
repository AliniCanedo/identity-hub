import type { ChangeEvent } from 'react';

import styles from './SearchInput.module.css';

type Props = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export function SearchInput({
  value,
  placeholder,
  onChange,
}: Props) {
  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    onChange(event.target.value);
  }

  return (
    <input
      className={styles.input}
      type="search"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}