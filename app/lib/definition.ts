export interface Subtask {
  id: number;
  name: string;
  status: string;
}

export interface Task {
  id: number;
  name: string;
  description: string;
  status: string;
  subtasks: Subtask[];
}

export interface Column {
  id: number;
  name: string;
  tasks: Task[];
}

export interface Board {
  id: number;
  name: string;
  columns: Column[];
}
