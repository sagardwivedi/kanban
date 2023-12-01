'use client';

import { useNewTaskModal } from '@/hooks/useBoardModal';
import { useBoardModal } from '@/hooks/useNewTaskModal';
import { PlusIcon, ViewColumnsIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

export function NewBoardButton() {
  const { onOpen } = useBoardModal();

  return (
    <div
      onClick={onOpen}
      className="mt-2 flex cursor-pointer flex-row items-center gap-x-3 pl-8"
    >
      <ViewColumnsIcon className="text-primary-color h-5 w-5" />
      <button className="text-primary-color">+ Create New Board</button>
    </div>
  );
}

export function AddNewTaskButton() {
  const { onOpen } = useNewTaskModal();
  const path = usePathname();

  const isProject = /^\/board\/[a-f\d-]+$/i.test(path);

  return (
    <>
      {isProject && (
        <button
          onClick={onOpen}
          className="bg-primary-color flex select-none flex-row items-center gap-x-1 rounded-full px-3 py-2 text-white"
        >
          <PlusIcon className="h-5 w-5" />
          <p>Add New Task</p>
        </button>
      )}
    </>
  );
}
