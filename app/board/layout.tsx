import { Nav } from '@/app/ui/nav';
import { SideNav } from '@/app/ui/side-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-row text-secondary-color dark:text-white">
      <div className="max-md:hidden">
        <SideNav>
          <Nav />
        </SideNav>
      </div>
      <div className="flex-grow">
        <div className="h-full w-full">{children}</div>
      </div>
    </div>
  );
}
