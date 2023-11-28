import Link from 'next/link';

export default function notFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-secondary-background">
      <h2 className="text-white">Not Found</h2>
      <Link className="rounded-md bg-primary-color p-3 text-white" href={'/'}>
        Return Home
      </Link>
    </div>
  );
}
