import { LucideIcon, Home, Shield, Users } from 'lucide-react';

export interface SidebarItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: Home,
  },
  {
    label: 'Validação',
    href: '/kyc',
    icon: Shield,
  },
  {
    label: 'Usuários',
    href: '/users',
    icon: Users,
  },
];