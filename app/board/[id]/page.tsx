import { getTasks } from '@/app/lib/utils';
import { TopBar } from '@/app/ui/top-bar';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const tasks = await getTasks(parseInt(id));

  if (tasks.length === 0) {
    notFound();
  }

  return (
    <div className="h-full bg-secondary-background">
      <div className="h-20 w-full">
        <TopBar id={parseInt(id)} />
      </div>
      {JSON.stringify(tasks, null, 2)}
    </div>
  );
}
