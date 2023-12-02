import { useSidebar } from '@/hooks/useSidebar';

export function HideButton() {
  const { isSidebarVisible, onClose, onOpen } = useSidebar();

  return (
    <>
      {isSidebarVisible ? (
        <div onClick={onClose}>Hide Sidebar</div>
      ) : (
        <div className="absolute bottom-5 left-0" onClick={onOpen}>
          Show Sidebar
        </div>
      )}
    </>
  );
}
