'use server';

import { LoginFormFields } from '@/components/ui/login/login-form';
import { createClient } from '@/lib/supbase/server';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: LoginFormFields) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { email, password } = formData;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect('/login?message=Could not authenticate user');
  }

  return redirect('/board');
}

export const signUp = async (formData: FormData): Promise<void> => {
  const origin = headers().get('origin');
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const supabase = createClient(cookies());

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return redirect('/login?message=Could not authenticate user');
  }

  return redirect('/login?message=Check email to continue sign in process');
};

export async function logOut() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  await supabase.auth.signOut();

  redirect('/login');
}
