import { notFound } from 'next/navigation';

import { Column } from '@/app/lib/definition';
import { getTasks } from '@/app/lib/utils';
import { TopBar } from '@/app/ui/top-bar';
import { TaskCard } from '@/app/ui/TaskCard';

const Column = ({ column }: { column: Column }) => {
  const getColumnColor = () => {
    switch (column.name) {
      case 'TODO':
        return 'bg-[#4dc1e8]';
      case 'DOING':
        return 'bg-[#8472ec]';
      case 'DONE':
        return 'bg-[#64e3b2]';
      default:
        return '';
    }
  };

  return (
    <div key={column.id} className="mb-4 mr-4 w-[21rem] rounded-md p-4">
      <div className="mb-5 flex flex-row items-center gap-x-2">
        <div className={`h-3 w-3 rounded-full ${getColumnColor()}`}></div>
        <p className="text-sm text-white/50">
          {column.name} ({column.tasks.length})
        </p>
      </div>
      <div className="mt-2">
        {column.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

const Board = ({ columns }: { columns: Column[] }) => (
  <main className="p-2">
    <div className="flex overflow-x-auto text-white">
      {columns.map((column) => (
        <Column key={column.id} column={column} />
      ))}
    </div>
  </main>
);

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const tasks = getTasks(parseInt(id));

  if (tasks.length === 0) {
    notFound();
  }

  return (
    <div className="h-full bg-secondary-background">
      <div className="h-20 w-full">
        <TopBar id={parseInt(id)} />
      </div>
      <Board columns={tasks} />
    </div>
  );
}
