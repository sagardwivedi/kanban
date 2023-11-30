'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
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

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex h-10 items-center justify-center rounded-md">
      <div className="flex flex-row items-center gap-2">
        <SunIcon className="h-5 w-5 text-secondary-color dark:text-white/50" />
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={handleToggle}
            className="hidden"
          />
          <div className="slider"></div>
        </label>
        <MoonIcon className="h-5 w-5 text-secondary-color dark:text-white/50" />
      </div>
    </div>
  );
}
