import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { SideNav } from '@/app/ui/side-nav';
import { ModalProvider } from '@/provider/ModalProvider';
import './globals.css';
import { Provider } from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kanban',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>
          <ModalProvider />
          <div className="flex h-screen flex-row">
            <div className="max-md:hidden">
              <SideNav />
            </div>
            <div className="flex-grow">
              <div className="h-full w-full">{children}</div>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
