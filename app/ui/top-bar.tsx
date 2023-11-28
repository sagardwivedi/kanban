import {
  EllipsisVerticalIcon,
  PlusSmallIcon,
} from '@heroicons/react/24/outline';
import { getBoardName } from '../lib/utils';

export async function TopBar({ id }: { id: number }) {
  const name = await getBoardName(id);
  return (
    <div className="flex h-full flex-row items-center justify-between border-b border-white/20 bg-primary-background px-8 text-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="flex flex-row items-center gap-x-4">
        <button className="flex flex-row items-center gap-x-1 rounded-full bg-primary-color p-2">
          <PlusSmallIcon className="h-5 w-5" />
          Add New Task
        </button>
        <button>
          <EllipsisVerticalIcon className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
}
