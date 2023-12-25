'use client';

import { useFormState } from 'react-dom';

import { loginAction } from '@/lib/actions/authActions';
import Link from 'next/link';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { LoginButton } from '../buttons';
import Input from '../ui/input';

export function LoginForm() {
  const [state, action] = useFormState(loginAction, {
    message: '',
    errors: {},
  });

  useEffect(() => {
    if (state.message && typeof state.message === 'string') {
      toast.error(state.message);
    }
  }, [state.message]);

  return (
    <form action={action} className="flex w-96 flex-col items-center gap-4">
      <Input
        type="email"
        placeholder="sagar@email.com"
        label="Email"
        id="email"
        name="email"
        error={state.errors?.email}
        ariaError="email-error"
        autoComplete="email"
        required
      />
      <Input
        type="password"
        placeholder="********"
        label="Password"
        id="password"
        name="password"
        error={state.errors?.password}
        ariaError="password-error"
        autoComplete="current-password"
        required
      />
      <LoginButton />
      <p>
        Don&apos;t have an account?{' '}
        <Link href={'/signup'} className="text-purple-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </form>
  );
}
