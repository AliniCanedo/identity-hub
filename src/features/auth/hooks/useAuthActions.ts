'use client';

import { useRouter } from 'next/navigation';

import { useAuthStore } from '../stores';

export function useAuthActions() {
  const router = useRouter();

  const logout = useAuthStore((state) => state.logout);

  function signOut() {
    logout();

    router.replace('/login');
  }

  return {
    signOut,
  };
}