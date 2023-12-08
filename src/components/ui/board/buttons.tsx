'use client';

import { logOut } from '@/actions/authAction';
import { deleteTask } from '@/actions/crudAction';
import { Button } from '@/components/Button';
import { useBoardModal } from '@/hooks/useBoardModal';
import { useNewTaskModal } from '@/hooks/useNewTaskModal';
import { useTaskModal } from '@/hooks/useTaskModal';
import { PlusIcon, ViewColumnsIcon } from '@heroicons/react/24/outline';
import { useParams } from 'next/navigation';

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
  const params = useParams();

  return (
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
  );
}

export function LogOutButton() {
  return (
    <form action={logOut}>
      <Button type="submit" text="Sign Out" />
    </form>
  );
}

export function RemoveTask({ id }: { id: string }) {
  const { onClose } = useTaskModal();
  const removeTaskWithId = deleteTask.bind(null, id);

  const FormSubmit = async () => {
    await removeTaskWithId();
    onClose();
  };

  return (
    <form onSubmit={() => FormSubmit}>
      <Button text="Remove" />
    </form>
  );
}
