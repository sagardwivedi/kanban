import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';

export function DropDown() {
  return (
    <button className="focus:outline-none">
      <EllipsisVerticalIcon className="h-8 w-8" />
    </button>
  );
}
