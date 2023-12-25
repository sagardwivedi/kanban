import Link from 'next/link';
import { Suspense } from 'react';

import { readAllData } from '@/lib/data';
import { Logo } from '../Logo';
import { BoardSkeleton } from '../skeletons/sidebar';

export function Sidebar() {
  return (
    <div className="h-full w-64 bg-primary-background">
      <div className="flex h-20 items-center justify-center">
        <Logo />
      </div>
      <div className="pl-4">
        <Suspense
          fallback={
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <BoardSkeleton key={index} />
              ))}
            </div>
          }
        >
          <Boards />
        </Suspense>
        <Link
          className="mt-4 block whitespace-pre pl-4 text-primary-text"
          href="?show=createBoard"
        >
          + Create New Board
        </Link>
      </div>
    </div>
  );
}

const Boards = async () => {
  const { data, message } = await readAllData();

  return (
    <div className="w-full space-y-4 pl-4">
      <p className="whitespace-pre">ALL BOARDS ({data?.length})</p>
      {message && <p>{message}</p>}
      {data && data?.length > 0 ? (
        <div className="space-y-4">
          {data?.map((b) => (
            <Link key={b.id} className="block" href={`/board/${b.id}`}>
              {b.name}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};
