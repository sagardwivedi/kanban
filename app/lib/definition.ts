type SubtaskStatus = 'Pending' | 'Completed';

export interface Subtask {
  subtask_id: string;
  subtask_name: string;
  status: SubtaskStatus;
}

export interface Task {
  task_id: string;
  task_name: string;
  description: string | null;
  status: string;
  subtasks: Subtask[];
}

export interface Column {
  id: number;
  column_name: string;
}

export interface Board {
  project_id: string;
  project_name: string;
  tasks: Task[];
}
