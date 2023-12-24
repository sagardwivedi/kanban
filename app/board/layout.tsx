import { Sidebar } from '@/components/board/SIdebar';

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-dvh flex-row text-white">
      <div className="max-md:hidden">
        <Sidebar />
      </div>
      <div className="flex-1 bg-secondary-background">{children}</div>
    </main>
  );
}
