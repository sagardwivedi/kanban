import { Task } from '@/app/lib/definition';
import { create } from 'zustand';

interface TaskModalStore {
  isOpen: boolean;
  task: Task | null;
  setTask: (task: Task) => void;
  onOpen: () => void;
  onClose: () => void;
}

export const useTaskModal = create<TaskModalStore>()((set) => ({
  isOpen: false,
  task: null,
  setTask: (task: Task) => set({ task: task }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
