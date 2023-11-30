import { AddNewTaskButton } from '../buttons';
import { Stripes } from '../logo';
import { DropDown } from './DropDown';

export async function TopBar({ name }: { name?: string }) {
  return (
    <div className="flex h-20 flex-row items-center justify-between border-b bg-primary-background_light px-3 text-secondary-color dark:border-white/20 dark:bg-primary-background_dark dark:text-white md:px-8">
      <div className="md:hidden">
        <Stripes />
      </div>
      <h2 className="text-xl font-bold max-md:hidden">{name}</h2>
      <div className="flex flex-row items-center gap-x-2 md:gap-x-4">
        <AddNewTaskButton />
        <DropDown />
      </div>
    </div>
  );
}
