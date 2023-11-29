import { Nav } from '../ui/board/nav';
import { SideNav } from '../ui/board/side-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-row text-secondary-color dark:text-white">
      <div className="hidden md:block">
        <SideNav>
          <Nav />
        </SideNav>
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
}
