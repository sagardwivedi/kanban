import type { Metadata } from 'next';

import { ModalProvider } from '@/provider/ModalProvider';
import { Theme } from '../provider/ThemeProvider';
import './globals.css';

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
      <body className="font-sans">
        <Theme>
          <ModalProvider />
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
