'use client';

import { useTaskModal } from '@/hooks/useTaskModal';
import { Task } from '../lib/definition';

export const TaskCard = ({ task }: { task: Task }) => {
  const { onOpen, setTask } = useTaskModal();

  const filteredSubtasks = task.subtasks.filter(
    (t) => t.status !== task.status,
  );

  const handleClick = () => {
    onOpen();
    setTask(task);
  };

  return (
    <div
      onClick={handleClick}
      className="mb-4 cursor-pointer rounded-md bg-primary-background_light p-4 shadow dark:bg-primary-background_dark"
    >
      <p className="text-lg font-semibold">{task.task_name}</p>
      <p className="dark:text-white/50">
        {filteredSubtasks.length} of {task.subtasks.length} subtasks
      </p>
    </div>
  );
};
