import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex h-full w-full items-center justify-center bg-secondary-background_light dark:bg-secondary-background_dark">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-primary-color">
          Click on boards to see tasks
        </h1>
        <p>Explore your tasks effortlessly by navigating through boards.</p>
        <Link
          className="hover:text-primary-hover text-primary-color underline transition"
          href="/board/1"
        >
          Go to Boards
        </Link>
      </div>
    </main>
  );
}
