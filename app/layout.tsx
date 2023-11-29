import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
