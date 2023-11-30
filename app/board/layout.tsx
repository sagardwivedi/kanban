import { SideNav } from '../ui/board/side-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-secondary-color dark:text-white md:flex md:flex-row">
      <div className="hidden md:block">
        <SideNav />
      </div>
      <div className="h-full flex-grow">{children}</div>
    </div>
  );
}
