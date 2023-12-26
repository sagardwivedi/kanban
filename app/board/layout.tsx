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
      <main className="flex h-dvh p-2 bg-neutral-950 text-white gap-2 flex-row">
        <div className="max-md:hidden">
          <Sidebar />
        </div>
        <div className="flex-1 bg-neutral-900 rounded-md shadow">{children}</div>
      </main>
    </>
  );
}
