import { ReactNode } from 'react';

import { AppLayout } from '@/components/layout/AppLayout/AppLayout';

type PrivateLayoutProps = {
  children: ReactNode;
};

export default function PrivateLayout({
  children,
}: PrivateLayoutProps) {
  return <AppLayout>{children}</AppLayout>;
}