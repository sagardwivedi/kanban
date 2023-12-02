import { Task } from '@/lib/definition';
import React from 'react';
import { TaskItem } from './TaskItem';

interface TaskColumnProps {
  title: string;
  tasks: Task[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks }) => {
  return (
    <div className="min-w-[20rem] md:w-96">
      <h2 className="mb-5 tracking-widest dark:text-white/50">
        {title} ({tasks.length})
      </h2>
      {tasks.map((task) => (
        <TaskItem key={task.task_id} task={task} />
      ))}
    </div>
  );
};

export default TaskColumn;
