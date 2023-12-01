import { Stripe } from '@/components/Logo';
import { getBoards } from '@/lib/data';
import { AddNewTaskButton } from './buttons';
import { Select } from './Select';
import { Suspense } from 'react';

export async function TopBar() {
  const boards = await getBoards();

  return (
    <div className="dark:bg-secondary-background_dark bg-secondary-background_light flex h-20 flex-row items-center justify-between px-4 md:px-8">
      <div className="flex flex-row items-center gap-4 md:hidden">
        <Stripe />
        <Suspense>
          <Select boards={boards} />
        </Suspense>
      </div>
      <div>
        <AddNewTaskButton />
      </div>
    </div>
  );
}
