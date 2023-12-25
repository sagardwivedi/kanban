import { ModalProvider } from '@/Provider/ModalProvider';
import { Sidebar } from '@/components/board/SIdebar';
import { Suspense } from 'react';

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>
        <ModalProvider />
      </Suspense>
      <main className="flex h-dvh flex-row text-white">
        <div className="max-md:hidden">
          <Sidebar />
        </div>
        <div className="flex-1 bg-secondary-background">{children}</div>
      </main>
    </>
  );
}
