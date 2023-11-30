import { PlusIcon } from '@heroicons/react/24/solid';

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
  columnOrder: Column;
}) {
  return (
    <div className="flex h-full flex-1 flex-row gap-8">
      {columnOrder.column_name.map((columnName, index) => (
        <Column
          key={columnName}
          tasks={tasks.filter((task) => task.status === columnName)}
          status={columnName}
          color={columnOrder.column_color[index]}
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
  return (
    <div className="min-h-screen bg-secondary-background_light dark:bg-secondary-background_dark">
      <TopBar name={'hello'} />
      <div className="h-full overflow-x-auto p-8 pr-0">
        {/* <KanbanBoard tasks={[]} columnOrder={[]} /> */}
      </div>
    </div>
  );
}
