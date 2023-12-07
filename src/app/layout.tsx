import type { Metadata } from 'next';

import { LoaderProvider } from '@/Providers/LoaderProvider';
import { ModalProvider } from '@/Providers/ModalProvider';
import { ThemeProvider } from '@/Providers/ThemeProvider';
import './globals.css';


export const metadata: Metadata = {
  title: 'Task Vista',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ModalProvider />
          <LoaderProvider>{children}</LoaderProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
