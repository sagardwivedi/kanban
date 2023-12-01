import { ModalProvider } from '@/Providers/ModalProvider';
import { ThemeProvider } from '@/Providers/ThemeProvider';
import { SideNav } from '@/components/ui/board/SideNav';
import { TopBar } from '@/components/ui/board/TopBar';

export default function Boardlayout({
  children,
}: {
  children: React.ReactNode;
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
          <div className="dark:bg-primary-background_dark bg-primary-background_light h-full md:overflow-y-auto">
            {children}
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
