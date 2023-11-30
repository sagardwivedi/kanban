'use client';

import { useBoardModal } from '@/hooks/useBoardModal';
import { useNewTaskModal } from '@/hooks/useNewTaskModal';
import { PlusIcon, ViewColumnsIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

export function AddNewTaskButton() {
  const { onOpen } = useNewTaskModal();
  const path = usePathname();

  const isProject = /^\/board\/[a-f\d-]+$/i.test(path);

  return (
    <>
      {isProject && (
        <button
          onClick={onOpen}
          className="flex select-none flex-row items-center gap-x-1 rounded-full bg-primary-color px-3 py-2 text-white"
        >
          <PlusIcon className="h-5 w-5 stroke-[2]" />
          <p className="max-md:hidden">Add New Task</p>
        </button>
      )}
    </>
  );
}

export function NewBoardButton() {
  const { onOpen } = useBoardModal();

  return (
    <div
      onClick={onOpen}
      className="flex cursor-pointer flex-row items-center gap-x-3 py-2 pl-5"
    >
      <ViewColumnsIcon className="h-5 w-5 text-primary-color" />
      <button className="text-primary-color">+ Create New Board</button>
    </div>
  );
}
