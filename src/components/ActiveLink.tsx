'use client';

import { ViewColumnsIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function ActiveLink({ href, text }: { href: string; text: string }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${
        path === href
          ? 'bg-primary-color  text-secondary-color gap-1 dark:text-white'
          : 'text-white/50'
      } flex w-[90%] flex-row items-center py-1 gap-1 rounded-r-full pl-8 transition-colors duration-200 ease-linear
      `}
    >
      <ViewColumnsIcon className={`h-5 w-5`} />
      <p className='text-lg'>{text}</p>
    </Link>
  );
}
