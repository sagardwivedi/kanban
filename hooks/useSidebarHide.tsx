import { create } from 'zustand';

interface SidebarHideState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useSidebarHide = create<SidebarHideState>()((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
