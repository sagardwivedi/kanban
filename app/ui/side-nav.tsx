import { Logo } from './logo';
import { Nav } from './nav';
import { ShowNavChanger } from './shownovchanger';
import { ThemeChanger } from './theme-changer';

export function SideNav() {
  return (
    <div className="h-full w-64 border-r border-white/20 bg-primary-background">
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="h-20 pl-8 pt-5 ">
            <Logo />
          </div>
          <Nav />
        </div>
        <div className="mb-4 px-5">
          <div className="h-auto w-full bg-secondary-background">
            <ThemeChanger />
          </div>
          <ShowNavChanger />
        </div>
      </div>
    </div>
  );
}
