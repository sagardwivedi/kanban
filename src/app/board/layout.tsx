import { Links } from '@/components/ui/board/Sidebar/Links';
import { SideNav } from '@/components/ui/board/Sidebar/SideNav';
import { TopBar } from '@/components/ui/board/TopBar/TopBar';
import { Suspense } from 'react';

export default async function Boardlayout({
  children,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <main className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-shrink-0 max-md:hidden">
        <Suspense>
          <SideNav>
            <Links />
          </SideNav>
        </Suspense>
      </div>
      <div className="flex-grow">
        <TopBar />
        <div className="h-full overflow-x-auto bg-secondary-background_light dark:bg-secondary-background_dark">
          {children}
        </div>
      </div>
    </main>
  );
}
