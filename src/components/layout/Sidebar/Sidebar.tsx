'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Sidebar.module.css';

import { SIDEBAR_ITEMS } from './sidebar-items';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.menu}>
        {SIDEBAR_ITEMS.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.link} ${
                pathname === item.href ? styles.active : ''
              }`}
            >
              <Icon size={18} />

              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}