import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

import { getBoardName } from '../lib/utils';
import { AddNewTaskButton } from './buttons';

export function TopBar({ id }: { id: number }) {
  const name = getBoardName(id);

  return (
    <div className="flex h-full flex-row items-center justify-between border-b border-white/20 bg-primary-background px-8 text-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="flex-rowclassName='max-md:hidden' flex items-center gap-x-4">
        <AddNewTaskButton />
        <button>
          <EllipsisVerticalIcon className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
}
