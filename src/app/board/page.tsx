import { getAllTasks } from '@/lib/data';

export default async function Board() {
  const projects = await getAllTasks();

  if (projects.length === 0) {
    return <div className='flex justify-center items-center h-full'>No Stats</div>
  }

  return (
    <main className="flex flex-col items-center p-8">
      {projects.map((project) => (
        <section
          key={project.project_name}
          className="mb-6 flex w-full flex-row items-center justify-between rounded-md bg-neutral-950 p-6"
        >
          <h2 className="mb-4 text-2xl font-bold">{project.project_name}</h2>
          <div className="grid grid-cols-3 gap-10">
            {renderStatus(
              'Pending',
              getTaskCount(project.tasks, 'Pending'),
              'bg-red-100',
            )}
            {renderStatus(
              'In Progress',
              getTaskCount(project.tasks, 'In Progress'),
              'bg-yellow-100',
            )}
            {renderStatus(
              'Completed',
              getTaskCount(project.tasks, 'Completed'),
              'bg-green-100',
            )}
          </div>
        </section>
      ))}
    </main>
  );
}

// Helper function to count tasks based on status
function getTaskCount(tasks, status): number {
  return tasks.filter((task) => task.status === status).length;
}

// Helper function to render status with count, conditionally
function renderStatus(status, count: number, bgColor: string) {
  return (
    <div className={`rounded-md p-2 text-center ${bgColor}`}>
      <p className="text-sm text-gray-600">{status}</p>
      <p className="text-lg font-bold text-gray-800">{count}</p>
    </div>
  );
}
