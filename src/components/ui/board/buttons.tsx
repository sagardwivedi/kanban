'use client';

import { useBoardModal } from '@/hooks/useBoardModal';
import { useNewTaskModal } from '@/hooks/useNewTaskModal';
import { PlusIcon, ViewColumnsIcon } from '@heroicons/react/24/outline';
import { useParams, usePathname } from 'next/navigation';

export function NewBoardButton() {
  const { onOpen } = useBoardModal();

  return (
    <div
      onClick={onOpen}
      className="mt-2 flex cursor-pointer flex-row items-center gap-x-3 pl-8"
    >
      <ViewColumnsIcon className="h-5 w-5 text-primary-color" />
      <button className="text-primary-color">+ Create New Board</button>
    </div>
  );
}

export function AddNewTaskButton() {
  const { onOpen, setId } = useNewTaskModal();
  const path = usePathname();
  const params = useParams();

  const isProject = /^\/board\/[a-f\d-]+$/i.test(path);

  return (
    <>
      {isProject && (
        <button
          onClick={() => {
            onOpen();
            setId(params.id as string);
          }}
          className="flex select-none flex-row items-center gap-x-1 rounded-full bg-primary-color px-3 py-2 text-white"
        >
          <PlusIcon className="h-5 w-5" />
          <p className="max-md:hidden">Add New Task</p>
        </button>
      )}
    </>
  );
}
