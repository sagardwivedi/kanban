import { Suspense } from 'react';
import Link from 'next/link';

import { ActiveLink } from '@/components/ActiveLink';
import { Logo } from '@/components/Logo';
import { ThemeChanger } from '@/components/ThemeChanger';
import { getBoards } from '@/lib/data';
import { NewBoardButton } from './buttons';

export function SideNav() {
  return (
    <div
      className={`h-full border-r bg-primary-background_light dark:border-white/20 dark:bg-primary-background_dark`}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="h-20 pl-8 pt-5 ">
            <Link href={'/board'}>
              <Logo />
            </Link>
          </div>
          <Suspense>
            <Links />
          </Suspense>
        </div>
        <div className="mb-4 px-5">
          <div className="h-auto w-full rounded-md bg-secondary-background_light dark:bg-secondary-background_dark">
            <ThemeChanger />
          </div>
        </div>
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
              href={`/board/${board.project_id}`}
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
