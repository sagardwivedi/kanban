import { Task } from '@/lib/definition';
import React from 'react';
import { TaskItem } from './TaskItem';

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  columnColor: string;
}

const TaskColumn: React.FC<TaskColumnProps> = ({
  title,
  tasks,
  columnColor,
}) => {
  return (
    <div className="min-w-[20rem] md:w-96">
      <h2 className={`mb-5 tracking-widest flex items-center gap-2 dark:text-white/50 `}>
        <div className={`${columnColor} w-3 h-3 rounded-full`}></div>
        {title} ({tasks.length})
      </h2>
      {tasks.map((task) => (
        <TaskItem key={task.task_id} task={task} />
      ))}
    </div>
  );
};

export default TaskColumn;
