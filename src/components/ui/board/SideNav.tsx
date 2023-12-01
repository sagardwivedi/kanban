import { Suspense } from 'react';

import { ActiveLink } from '@/components/ActiveLink';
import { Logo } from '@/components/Logo';
import { getBoards } from '@/lib/data';
import { NewBoardButton } from './buttons';

export function SideNav() {
  return (
    <div className="dark:bg-secondary-background_dark bg-secondary-background_light h-full">
      <div className="flex h-20 items-center pl-8">
        <Logo />
      </div>
      <div className="space-y-2">
        <Suspense>
          <Links />
        </Suspense>
      </div>
    </div>
  );
}

async function Links() {
  const boards = await getBoards();

  return (
    <>
      <h2 className="my-2 pl-8 tracking-widest text-black dark:text-white/50">
        ALL BOARDS ({boards.length})
      </h2>
      <div>
        <>
          {boards.map((board) => (
            <ActiveLink
              href={board.project_id}
              text={board.project_name}
              key={board.project_id}
            />
          ))}
          <NewBoardButton />
        </>
      </div>
    </>
  );
}
