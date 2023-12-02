'use client';

import { useTaskModal } from '@/hooks/useTaskModal';
import { Subtask, Task } from '@/lib/definition';

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { onOpen, setTask } = useTaskModal();

  const handleClick = () => {
    onOpen();
    setTask(task);
  };

  return (
    <div
      onClick={handleClick}
      className="mb-5 h-32 w-full cursor-pointer select-none rounded-md bg-primary-background_light px-4 py-6 dark:bg-primary-background_dark"
    >
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
