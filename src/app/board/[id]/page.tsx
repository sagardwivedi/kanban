import TaskColumn from '@/components/ui/board/TaskColumn';
import { checkBoardExists, getTasks } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function IndividualBoard({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  // Check if the project exists
  const isProject = await checkBoardExists(id);

  // If the project doesn't exist, return a 404 page
  if (!isProject) {
    return notFound();
  }

  // If the project exists, fetch tasks
  const { error, data } = await getTasks(id);

  // Handle errors during task fetching
  if (error || data === null) {
    throw new Error('Error fetching tasks');
  }

  // Organize tasks into different columns based on status
  const todoTasks = data.filter((task) => task.status === 'Pending');
  const doingTasks = data.filter((task) => task.status === 'In Progress');
  const doneTasks = data.filter((task) => task.status === 'Completed');

  // Render the tasks data
  return (
    <main className="flex flex-row gap-5 p-5">
      <TaskColumn title="TODO" tasks={todoTasks} />
      <TaskColumn title="DOING" tasks={doingTasks} />
      <TaskColumn title="DONE" tasks={doneTasks} />
    </main>
  );
}
