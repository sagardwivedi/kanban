import { EyeSlashIcon } from '@heroicons/react/24/outline';

export function ShowNavChanger() {
  return (
    <div className="mt-4 flex flex-row items-center gap-3 text-sm text-white/50">
      <EyeSlashIcon className="h-5 w-5" />
      Hide Sidebar
    </div>
  );
}
