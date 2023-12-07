import { Suspense } from 'react';

import { Stripe } from '@/components/Logo';
import { getBoards } from '@/lib/data';
import { BoardName } from './BoardName';
import { SelectBoard } from './SelectBoard';
import { AddNewTaskButton } from '../buttons';
import { DropDown } from './SelectOption';

export async function TopBar() {
  const boards = await getBoards();

  return (
    <div className="flex h-20 flex-row items-center justify-between border-b bg-primary-background_light px-4 dark:border-white/0 dark:bg-primary-background_dark md:px-5">
      {/* Only show on small screen with width less than 768px */}
      <div className="flex flex-row items-center gap-4 md:hidden">
        <Stripe />
        <Suspense fallback={<div className="w-36 bg-gray-500"></div>}>
          <SelectBoard boards={boards} />
        </Suspense>
      </div>

      {/* Only show on big screen with width more than 768px */}
      <div className="max-md:hidden">
        <BoardName boards={boards} />
      </div>

      {/* Always show */}
      <div className="flex items-center justify-between gap-x-4">
        <AddNewTaskButton />
        <DropDown />
      </div>
    </div>
  );
}
