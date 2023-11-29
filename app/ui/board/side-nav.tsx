'use client';

import { useSidebarHide } from '@/hooks/useSidebarHide';
import Link from 'next/link';
import { Logo } from '../logo';
import { ThemeChanger } from '../theme-changer';
import { ShowNavChanger } from './shownovchanger';

export function SideNav({ children }: { children: React.ReactNode }) {
  const { isOpen } = useSidebarHide();

  return (
    <div
      className={`${
        isOpen ? 'w-64' : 'w-0'
      } h-full border-r bg-primary-background_light dark:border-white/20 dark:bg-primary-background_dark`}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="h-20 pl-8 pt-5 ">
            <Link href={'/board'}>
              <Logo />
            </Link>
          </div>
          {children}
        </div>
        <div className="mb-4 px-5">
          <div className="h-auto w-full bg-secondary-background_light dark:bg-secondary-background_dark">
            <ThemeChanger />
          </div>
          <ShowNavChanger />
        </div>
      </div>
    </div>
  );
}
