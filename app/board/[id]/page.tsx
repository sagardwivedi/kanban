import { PlusIcon } from '@heroicons/react/24/solid';

import { getBoardName, getColumns, getTasks } from '@/app/lib/data';
import { Column, Task } from '@/app/lib/definition';
import { TopBar } from '@/app/ui/TopBar/top-bar';
import { TaskCard } from '@/app/ui/board/TaskCard';

function Column({
  tasks,
  status,
  color,
}: {
  tasks: Task[];
  status: string;
  color: string;
}) {
  return (
    <div className="w-[20rem]">
      <div className="mb-4 flex flex-row items-center gap-x-2">
        <div className={`h-3 w-3 rounded-full ${color}`}></div>
        <p className="text-sm text-black dark:text-white/50">
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
    <div className="flex h-full flex-row gap-8 overflow-x-scroll">
      {columnOrder.map((status) => (
        <Column
          key={status.id}
          tasks={tasks.filter((task) => task.status === status.column_name)}
          status={status.column_name}
          color={status.column_color}
        />
      ))}
      <div className="flex h-full w-full flex-1 items-center justify-center rounded-md bg-primary-background_light p-4 dark:bg-primary-background_dark">
        <button key="new-column" className="flex flex-row items-center gap-x-2">
          <PlusIcon className="h-5 w-5" />
          New Column
        </button>
      </div>
    </div>
  );
}

export default async function Page({ params }: { params: { id: string } }) {
  const [tasks, columnOrder, boardName] = await Promise.all([
    getTasks(params.id),
    getColumns(params.id),
    getBoardName(params.id),
  ]);

  return (
    <div className="min-h-screen bg-secondary-background_light dark:bg-secondary-background_dark">
      <TopBar name={boardName} />
      <div className="h-full p-8 pr-0">
        <KanbanBoard tasks={tasks} columnOrder={columnOrder} />
      </div>
    </div>
  );
}
