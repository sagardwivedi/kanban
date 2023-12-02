'use client';

import Link from 'next/link';

import { Logo } from '@/components/Logo';
import { useSidebar } from '@/hooks/useSidebar';
import { cn } from '@/lib/utils';
import { HideButton } from './HideButton';
import { ThemeChanger } from './ThemeChanger';

export function SideNav({ children }: { children: React.ReactNode }) {
  const { isSidebarVisible, onOpen } = useSidebar();

  return (
    <div
      className={cn(
        `h-full border-r bg-primary-background_light dark:border-white/20 dark:bg-primary-background_dark`,
        isSidebarVisible ? 'w-64' : 'w-0 overflow-hidden',
      )}
    >
      <div className="flex h-full flex-col justify-between transition-all duration-200">
        <div>
          <div className="h-20 pl-8 pt-5 ">
            <Link href={'/board'}>
              <Logo />
            </Link>
          </div>
          {children}
        </div>
        <div className="mb-4 px-5">
          <div className="h-auto w-full rounded-md bg-secondary-background_light dark:bg-secondary-background_dark">
            <ThemeChanger />
          </div>
          <HideButton />
        </div>
      </div>
    </div>
  );
}
