import Link from 'next/link';

export default function notFound() {
  return (
    <div className='bg-secondary-background flex justify-center items-center h-full flex-col'>
      <h2 className='text-white'>Not Found</h2>
      <Link className='rounded-md p-3 bg-primary-color text-white' href={'/'}>Return Home</Link>
    </div>
  );
}
