'use client';

import { useTaskModal } from '@/hooks/useTaskModal';
import { PlusIcon } from '@heroicons/react/24/outline';

export function AddNewTaskButton() {
  const { onOpen } = useTaskModal();
  return (
    <button
      onClick={onOpen}
      className="flex flex-row items-center gap-x-1 rounded-full bg-primary-color px-3 py-2 text-white"
    >
      <PlusIcon className="h-5 w-5" />
      <p>Add New Task</p>
    </button>
  );
}
