import { create } from 'zustand';

interface BoardModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useBoardModal = create<BoardModalState>()((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
