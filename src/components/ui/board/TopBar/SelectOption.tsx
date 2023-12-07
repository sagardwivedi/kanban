'use client'

import { Select, SelectOption } from '@/components/Select';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';

function Trigger() {
  return <EllipsisVerticalIcon className="h-8 w-8 text-white/50" />;
}

export function DropDown() {
  return (
    <Select trigger={<Trigger />}>
      <SelectOption>Delete Prohecj</SelectOption>
      <SelectOption>Log Out</SelectOption>
    </Select>
  );
}
