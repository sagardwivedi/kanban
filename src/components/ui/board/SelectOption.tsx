'use client';

import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { useParams } from 'next/navigation';

import { logOut } from '@/actions/authAction';
import { deleteBoard } from '@/actions/crudAction';
import { useOutsideClickListener } from '@/hooks/useOutSideClickListener';

export function SelectOption() {
  const { isOpen, selectOptionRef, toggle } = useOutsideClickListener();
  const params = useParams() as { id: string };

  const handleDelete = async (id: string) => {
    await deleteBoard(id);
    toggle();
  };

  return (
    <div className="relative" ref={selectOptionRef}>
      <div onClick={toggle} className="cursor-pointer">
        <EllipsisVerticalIcon className="h-8 w-8 text-white/50" />
      </div>
      {isOpen && (
        <div className="absolute right-4 w-36 rounded-md bg-primary-background_light p-2 shadow dark:bg-primary-background_dark">
          {params.id && (
            <p
              onClick={async () => handleDelete(params.id)}
              className="cursor-pointer rounded-md p-1 dark:hover:bg-primary-color dark:hover:text-white"
            >
              Delete Project
            </p>
          )}
          <form action={logOut}>
            <button className="w-full cursor-pointer rounded-md p-1 text-left text-red-500 dark:hover:bg-primary-color dark:hover:text-white">
              Log Out
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
