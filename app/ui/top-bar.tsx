import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

import { AddNewTaskButton } from './buttons';

export function TopBar({ id }: { id?: number }) {
  return (
    <div className="flex h-20 flex-row items-center justify-between border-b bg-primary-background_light px-8 text-secondary-color dark:border-white/20 dark:bg-primary-background_dark dark:text-white">
      <div></div>
      {/* {name && <h2 className="text-xl font-bold">{name}</h2>} */}
      <div className="flex-rowclassName='max-md:hidden' flex items-center gap-x-4">
        <AddNewTaskButton />
        <button>
          <EllipsisVerticalIcon className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
}
