import { getTasks } from '@/lib/data';
import { Suspense } from 'react';
import { TasksSkeleton } from '../skeletons/sidebar';

export function KanbanBoard({ id }: { id: string }) {
  return (
    <div className='flex flex-row gap-10 overflow-x-auto max-md:w-full'>
      <div>
        <h2 className='mb-4'>TODO</h2>
        <Suspense fallback={<TasksSkeleton />}>
          <Tasks id={id} status="Pending" />
        </Suspense>
      </div>
      <div>
        <h2 className='mb-4'>PROGRESS</h2>
        <Suspense fallback={<TasksSkeleton />}>
          <Tasks id={id} status="In Progress" />
        </Suspense>
      </div>
      <div>
        <h2 className='mb-4'>COMPLETED</h2>
        <Suspense fallback={<TasksSkeleton />}>
          <Tasks id={id} status="Completed" />
        </Suspense>
      </div>
    </div>
  );
}

export async function Tasks({
  id,
  status,
}: {
  id: string;
  status: 'Pending' | 'In Progress' | 'Completed';
}) {
  const taskResponse = await getTasks(id, status);

  if (!taskResponse || !taskResponse.data) {
    return <h2>{taskResponse?.message || 'No tasks found'}</h2>
  }

  return (
    <div className='flex flex-col gap-5'>
      {taskResponse.data.map((t) => (
        <div
          key={t.id}
          className="h-28 w-80 rounded-md bg-neutral-800 p-2 text-white shadow"
        >
          <h1>{t.name}</h1>
        </div>
      ))}
    </div>
  );
}
