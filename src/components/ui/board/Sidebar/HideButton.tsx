import { useSidebar } from '@/hooks/useSidebar';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export function HideButton() {
  const { isSidebarVisible, onClose, onOpen } = useSidebar();

  return (
    <>
      {isSidebarVisible ? (
        <div
          onClick={onClose}
          className="mt-2 flex cursor-pointer flex-row items-center gap-2"
        >
          <EyeSlashIcon className="h-5 w-5" />
          Hide Sidebar
        </div>
      ) : (
        <div
          className="absolute bottom-5 left-0 cursor-pointer rounded-r-full bg-primary-background_light p-1 pr-2 dark:bg-primary-background_dark"
          onClick={onOpen}
        >
          <EyeIcon className="h-5 w-5 transition-transform hover:translate-x-1" />
        </div>
      )}
    </>
  );
}
