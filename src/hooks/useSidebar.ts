import { create } from 'zustand';

interface SideBarState {
  isSidebarVisible: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useSidebar = create<SideBarState>()((set) => ({
  isSidebarVisible: true,
  onOpen: () => set({ isSidebarVisible: true }),
  onClose: () => set({ isSidebarVisible: false }),
}));
