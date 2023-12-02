import { Subtask, Task } from '@/lib/definition';
import React from 'react';

interface TaskColumnProps {
  title: string;
  tasks: Task[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks }) => {
  return (
    <div className="w-96">
      <h2 className="mb-5 tracking-widest dark:text-white/50">
        {title} ({tasks.length})
      </h2>
      {tasks.map((task) => (
        <TaskItem key={task.task_id} task={task} />
      ))}
    </div>
  );
};

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <div className="h-32 w-full rounded-md bg-primary-background_light px-4 py-6 dark:bg-primary-background_dark">
      <h3 className="text-2xl font-bold text-black dark:text-white">
        {task.task_name}
      </h3>
      <SubtaskInfo subtasks={task.subtasks} />
    </div>
  );
};

interface SubtaskInfoProps {
  subtasks: Subtask[];
}

const SubtaskInfo: React.FC<SubtaskInfoProps> = ({ subtasks }) => {
  const completedSubtasks = subtasks.filter(
    (subtask) => subtask.status === 'Completed',
  ).length;
  const totalSubtasks = subtasks.length;

  return (
    <div className="mt-2 text-sm dark:text-white/50">{`${completedSubtasks} of ${totalSubtasks} subtasks`}</div>
  );
};

export default TaskColumn;
