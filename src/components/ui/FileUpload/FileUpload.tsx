'use client';

import type { ChangeEvent } from 'react';

import type { FileUploadProps } from './FileUpload.types';

import styles from './FileUpload.module.css';

export function FileUpload({
  file,
  onChange,
  accept,
}: FileUploadProps) {
  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    onChange(event.target.files?.[0] ?? null);
  }

  return (
    <div className={styles.container}>
      <input
        type="file"
        accept={accept}
        onChange={handleChange}
      />

      {file && (
        <p>{file.name}</p>
      )}
    </div>
  );
}