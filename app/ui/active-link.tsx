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
          ? 'gap-1  bg-primary-color text-secondary-color dark:text-white'
          : 'text-white/50'
      } flex w-[90%] flex-row items-center gap-1 rounded-r-full py-2 pl-5 transition-colors duration-200 ease-linear
      `}
    >
      <ViewColumnsIcon className={`h-5 w-5`} />
      <p>{text}</p>
    </Link>
  );
}
