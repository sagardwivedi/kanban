import { AddNewTaskButton } from '../buttons';
import { DropDown } from './DropDown';

export function TopBar({ name }: { name?: string }) {
  return (
    <div className="flex h-20 flex-row items-center justify-between border-b bg-primary-background_light px-8 text-secondary-color dark:border-white/20 dark:bg-primary-background_dark dark:text-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="flex-rowclassName='max-md:hidden' flex items-center gap-x-4">
        <AddNewTaskButton />
        <DropDown />
      </div>
    </div>
  );
}
