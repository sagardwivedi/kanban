'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Root, Thumb } from '@radix-ui/react-switch';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { useSidebarHide } from '@/hooks/useSidebarHide';

export function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { isOpen } = useSidebarHide();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) {
    return <div className="h-10 w-full rounded-md bg-white/50"></div>;
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex h-10 items-center justify-center rounded-md">
      <div className="flex flex-row items-center gap-2">
        <SunIcon className="h-5 w-5 text-secondary-color dark:text-white/50" />
        <Root
          className="peer relative h-[25px] w-[42px] cursor-pointer rounded-full bg-primary-background_light outline-none data-[state=checked]:bg-black dark:bg-white/50"
          id="theme-mode"
          onCheckedChange={toggleTheme}
          checked={theme === 'dark'}
        >
          <Thumb className="block h-[20px] w-[20px] translate-x-0.5 rounded-full bg-black transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[18px] dark:bg-white" />
        </Root>
        <MoonIcon className="h-5 w-5 text-secondary-color dark:text-white/50" />
      </div>
    </div>
  );
}
