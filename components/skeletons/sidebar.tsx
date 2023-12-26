export function BoardSkeleton() {
  return (
    <div className="h-6 w-[90%] animate-pulse rounded-full bg-gray-200"></div>
  );
}

export function TasksSkeleton() {
  return (
    <div className="flex flex-col gap-5">
      <TaskSkeleton />
      <TaskSkeleton />
      <TaskSkeleton />
    </div>
  );
}

export function TaskSkeleton() {
  return <div className="h-28 w-[90%] animate-pulse rounded-md bg-neutral-800"></div>;
}
