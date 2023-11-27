import { Logo } from './logo';
import { Nav } from './nav';

export function SideNav() {
  return (
    <main className="h-full w-64 border-r border-white/20 bg-primary-background">
      <div className="h-20 pl-8 pt-5 ">
        <Logo />
      </div>
      <Nav />
    </main>
  );
}
