import { create } from 'zustand';

interface NewTaskModalState {
  isOpen: boolean;
  project_id: string;
  setId: (id: string) => void;
  onOpen: () => void;
  onClose: () => void;
}

export const useNewTaskModal = create<NewTaskModalState>()((set) => ({
  isOpen: false,
  project_id: '',
  setId: (id: string) => set({ project_id: id }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
