'use client';

import { ThemeProvider } from 'next-themes';

export function Theme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme="dark"
      attribute="class"
    >
      {children}
    </ThemeProvider>
  );
}
