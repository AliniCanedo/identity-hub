'use client';

import { APP_NAME } from '@/utils/constants';
import { useAppStore } from '@/stores/app.store';

export default function Home() {
  const { isLoading, setLoading } = useAppStore();

  return (
    <main>
      <h1>{APP_NAME}</h1>

      <p>
        Loading:
        {' '}
        {String(isLoading)}
      </p>

      <button onClick={() => setLoading(!isLoading)}>
        Alternar Loading
      </button>
    </main>
  );
}