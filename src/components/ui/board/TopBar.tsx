import { Stripe } from '@/components/Logo';
import { getBoards } from '@/lib/data';
import { Suspense } from 'react';
import { SelectBoard } from './SelectBoard';
import { SelectOption } from './SelectOption';
import { AddNewTaskButton } from './buttons';
import { BoardName } from './BoardName';

export async function TopBar() {
  const boards = await getBoards();

  return (
    <div className="flex h-20 flex-row items-center justify-between bg-primary-background_light px-4 dark:bg-primary-background_dark md:px-5">
      <div className="flex flex-row items-center gap-4 md:hidden">
        <Stripe />
        <Suspense>
          <SelectBoard boards={boards} />
        </Suspense>
      </div>
      <div className="max-md:hidden">
        <Suspense>
          <BoardName boards={boards} />
        </Suspense>
      </div>
      <div className="flex items-center justify-between gap-x-4">
        <AddNewTaskButton />
        <SelectOption />
      </div>
    </div>
  );
}
