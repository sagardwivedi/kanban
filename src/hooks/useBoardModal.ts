import { create } from 'zustand';

interface NewTaskModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useNewTaskModal = create<NewTaskModalState>()((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
