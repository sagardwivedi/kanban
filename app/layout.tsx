import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { SideNav } from '@/app/ui/side-nav';
import './globals.css';
import { TopBar } from './ui/top-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen flex-row`}>
        <div className="hidden flex-none md:block">
          <SideNav />
        </div>
        <div className="flex-grow md:overflow-y-auto">
          <div className="h-full w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}