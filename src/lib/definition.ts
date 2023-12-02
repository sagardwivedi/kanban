export interface Subtask {
  subtask_id: string;
  subtask_name: string;
  status: string;
}

export interface Task {
  task_id: string;
  task_name: string;
  description: string | null;
  status: string;
  subtasks: Subtask[];
}

export interface Board {
  project_id: string;
  project_name: string;
}

export interface BoardWithTask extends Board {
  tasks: Task[];
}
