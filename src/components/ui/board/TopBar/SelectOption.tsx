import Dropdown from '@/components/Select';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import { LogOutButton } from '../buttons';

function Trigger() {
  return <EllipsisVerticalIcon className="h-8 w-8 text-white/50" />;
}

export function SelectOption() {
  return (
    <Dropdown trigger={<Trigger />}>
      <LogOutButton />
    </Dropdown>
  );
}
