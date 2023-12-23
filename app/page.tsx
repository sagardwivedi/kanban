import { Stripe } from '@/components/Logo';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-auto flex h-dvh w-[90%] max-w-6xl flex-col">
      <div className="flex flex-row items-center justify-between pt-10">
        <div>
          <h2>Innovate. Elevate. Organize.</h2>
        </div>
        <div>
          <Link href={'/login'}>Get Started</Link>
        </div>
      </div>
      <div className="flex h-full flex-col items-center justify-center gap-5">
        <Stripe />
        <h1 className="text-2xl font-semibold md:text-8xl">TASK VISTA</h1>
      </div>
    </div>
  );
}
