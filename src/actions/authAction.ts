'use server';

import { LoginFormFields } from '@/components/ui/login/login-form';
import { createClient } from '@/lib/supbase/server';
import { cookies } from 'next/headers';
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

export async function logOut() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  await supabase.auth.signOut();

  redirect('/login');
}
