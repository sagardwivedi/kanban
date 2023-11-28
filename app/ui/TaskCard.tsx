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
      className="mb-4 cursor-pointer rounded-md bg-primary-background p-4 shadow"
    >
      <p className="text-lg font-semibold">{task.name}</p>
      <p className="text-white/50">
        {filteredSubtasks.length} of {task.subtasks.length} subtasks
      </p>
    </div>
  );
};
