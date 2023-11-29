import { PlusIcon } from '@heroicons/react/24/solid';

import { getColumns, getTasks } from '@/app/lib/data';
import { Column, Task } from '@/app/lib/definition';
import { TaskCard } from '@/app/ui/TaskCard';
import { TopBar } from '@/app/ui/top-bar';

function Column({ tasks, status }: { tasks: Task[]; status: string }) {
  const getColumnColor = () => {
    switch (status) {
      case 'Todo':
        return 'bg-[#4dc1e8]';
      case 'Doing':
        return 'bg-[#8472ec]';
      case 'Completed':
        return 'bg-[#64e3b2]';
      default:
        return '';
    }
  };

  return (
    <div className="w-[20rem]">
      <div className="mb-4 flex flex-row items-center gap-x-2">
        <div className={`h-3 w-3 rounded-full ${getColumnColor()}`}></div>
        <p className="text-sm text-white/50">
          <span className="uppercase tracking-widest">{status}</span> (
          {tasks.length})
        </p>
      </div>

      {tasks.map((task) => (
        <TaskCard key={task.task_id} task={task} />
      ))}
    </div>
  );
}

async function KanbanBoard({
  tasks,
  columnOrder,
}: {
  tasks: Task[];
  columnOrder: Column[];
}) {
  return (
    <div className="flex flex-row gap-8 overflow-x-auto">
      {columnOrder.map((status) => (
        <Column
          key={status.id}
          tasks={tasks.filter((task) => task.status === status.column_name)}
          status={status.column_name}
        />
      ))}
      <div className="flex h-full w-full flex-1 items-center justify-center bg-primary-background_light p-4 dark:bg-primary-background_dark">
        <button key="new-column">
          <PlusIcon className="h-5 w-5" />
          New Column
        </button>
      </div>
    </div>
  );
}

export default async function Page({ params }: { params: { id: string } }) {
  const tasks = await getTasks(params.id);
  const columnOrder = await getColumns(params.id);

  return (
    <div className="h-full bg-secondary-background_light dark:bg-secondary-background_dark">
      <TopBar id={parseInt(params.id)} />
      <div className="p-8">
        <KanbanBoard tasks={tasks} columnOrder={columnOrder} />
      </div>
    </div>
  );
}
