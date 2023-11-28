'use client';

import { useSidebarHide } from '@/hooks/useSidebarHide';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export function ShowNavChanger() {
  const { onClose, isOpen, onOpen } = useSidebarHide();

  return (
    <>
      {isOpen ? (
        <div
          onClick={onClose}
          className="mt-4 flex cursor-pointer flex-row items-center gap-3 text-sm text-white/50"
        >
          <EyeSlashIcon className="h-5 w-5" />
          Hide Sidebar
        </div>
      ) : (
        <div
          className="absolute bottom-2 left-0 cursor-pointer rounded-r-full bg-neutral-950 p-2"
          onClick={onOpen}
        >
          <EyeIcon className="h-5 w-5" />
        </div>
      )}
    </>
  );
}
