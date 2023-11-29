import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ModalProvider } from '@/provider/ModalProvider';
import { Theme } from '../provider/ThemeProvider';
import './globals.css';

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
        <Theme>
          <ModalProvider />
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
