import { ViewColumnsIcon } from '@heroicons/react/24/outline';
import { Suspense } from 'react';
import { getBoardLength, getBoards } from '../lib/utils';
import { ActiveLink } from './active-link';
import { BoardLoader } from './suspense';

export function Nav() {
  return (
    <div>
      <div className="flex flex-row items-center gap-2 pl-5 text-xs tracking-wider text-white/50">
        <p>ALL BOARDS</p>
        <Suspense
          fallback={<div className="h-1 w-1 bg-white/50 pl-5 pt-2"></div>}
        >
          <ShowLength />
        </Suspense>
      </div>
      <Suspense fallback={<BoardLoader />}>
        <Boards />
      </Suspense>
    </div>
  );
}

export function ShowLength() {
  const length = getBoardLength();
  return <>({length})</>;
}

export function Boards() {
  const boards = getBoards();

  return (
    <div className="mt-2 flex flex-col gap-y-1">
      {boards.map((board) => (
        <Suspense key={board.id}>
          <ActiveLink href={`/board/${board.id}`} text={board.name} />
        </Suspense>
      ))}
      <div className="flex flex-row items-center gap-x-3 py-2 pl-5">
        <ViewColumnsIcon className="h-5 w-5 text-primary-color" />
        <button className="text-primary-color">+ Create New Board</button>
      </div>
    </div>
  );
}
