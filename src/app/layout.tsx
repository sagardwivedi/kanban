import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
