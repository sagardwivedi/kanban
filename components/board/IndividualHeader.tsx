import Link from 'next/link';
import { IndividualDropDown } from './IndividualDropDown';
import { getBoardName } from '@/lib/data';
import { Suspense } from 'react';

interface IndividualHeaderProps {
  id: string;
}

export function IndividualHeader({ id }: IndividualHeaderProps) {
  return (
    <div className="flex h-20 flex-row items-center justify-between whitespace-pre px-4">
      <Suspense
        fallback={
          <h3 className="text-3xl w-28 h-12 animate-pulse rounded-md bg-gray-500"></h3>
        }
      >
        <BoardName id={id} />
      </Suspense>
      <div className="flex flex-row items-center gap-2">
        <button className="rounded-full bg-violet-500 p-3">
          <Link href={`?show=addTask`} className="block h-full w-full">
            + New Task
          </Link>
        </button>
        <IndividualDropDown id={id} />
      </div>
    </div>
  );
}

async function BoardName({ id }: { id: string }) {
  const name = await getBoardName(id);

  return <h3 className="text-3xl">{name}</h3>;
}
