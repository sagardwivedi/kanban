import { getBoardName } from '@/lib/data';
import Link from 'next/link';
import { IndividualDropDown } from './IndividualDropDown';

interface IndividualHeaderProps {
  id: string;
}

export async function IndividualHeader({ id }: IndividualHeaderProps) {
  const name = await getBoardName(id);

  return (
    <div className="flex h-20 flex-row items-center justify-between whitespace-pre bg-primary-background px-8">
      <h2>{name}</h2>
      <div className="flex flex-row items-center gap-2">
        <button className="rounded-full bg-violet-500 p-3 text-white">
          <Link href={`?show=addTask`} className="block h-full w-full">
            + New Task
          </Link>
        </button>
        <IndividualDropDown id={id} />
      </div>
    </div>
  );
}
