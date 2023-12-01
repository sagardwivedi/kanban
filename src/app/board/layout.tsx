import { ModalProvider } from '@/Providers/ModalProvider';
import { ThemeProvider } from '@/Providers/ThemeProvider';
import { SideNav } from '@/components/ui/board/SideNav';
import { TopBar } from '@/components/ui/board/TopBar';
import { getBoardName } from '@/lib/data';

export default async function Boardlayout({
  children,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <ThemeProvider>
      <ModalProvider />
      <main className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none max-md:hidden md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow">
          <TopBar />
          <div className="h-full bg-secondary-background_light dark:bg-secondary-background_dark md:overflow-y-auto">
            {children}
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}