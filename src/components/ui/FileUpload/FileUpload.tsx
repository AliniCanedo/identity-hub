'use client';

import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';

import type { FileUploadProps } from './FileUpload.types';

import styles from './FileUpload.module.css';

export function FileUpload({
  file,
  onChange,
  accept,
}: FileUploadProps) {
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(file);

    setPreview(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

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

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className={styles.preview}
        />
      )}

      {file && (
        <p>{file.name}</p>
      )}
    </div>
  );
}