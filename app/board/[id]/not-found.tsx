import Link from 'next/link';

export default function notFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-secondary-background_light dark:bg-secondary-background_dark">
      <h2>Not Found</h2>
      <Link className="rounded-md bg-primary-color p-3" href={'/'}>
        Return Home
      </Link>
    </div>
  );
}
