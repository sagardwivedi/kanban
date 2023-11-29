import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { signIn, signUp } from '../lib/actions/authAction';
import { Logo } from '../ui/logo';

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div className="mx-auto flex h-screen w-screen flex-1 flex-col items-center justify-center gap-2 px-8 sm:max-w-md">
      <Link
        href="/"
        className="group absolute left-8 top-8 flex items-center rounded-md px-4 py-2 text-sm no-underline"
      >
        <ArrowLeftIcon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back
      </Link>

      <form
        className="flex w-full flex-1 flex-col justify-center gap-2"
        action={signIn}
      >
        <div className="mb-4">
          <Logo />
        </div>
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="mb-6 rounded-md border bg-inherit px-4 py-2"
          name="email"
          id="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="mb-6 rounded-md border bg-inherit px-4 py-2"
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          required
        />
        <button className="mb-2 rounded-md bg-primary-color px-4 py-2 text-white">
          Sign In
        </button>
        <button
          formAction={signUp}
          className="mb-2 rounded-md border px-4 py-2"
        >
          Sign Up
        </button>
        {searchParams?.message && (
          <p className="mt-4 p-4 text-center">{searchParams.message}</p>
        )}
      </form>
    </div>
  );
}
