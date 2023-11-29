import { create } from 'zustand';

interface NewTaskModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useNewTaskModal = create<NewTaskModalStore>()((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
