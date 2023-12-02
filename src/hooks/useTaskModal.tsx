import { Task } from '@/lib/definition';
import { create } from 'zustand';

interface TaskModalState {
  isOpen: boolean;
  task: Task | null;
  setTask: (task: Task) => void;
  onOpen: () => void;
  onClose: () => void;
}

export const useTaskModal = create<TaskModalState>()((set) => ({
  isOpen: false,
  task: null,
  setTask: (task) => set({ task: task }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
