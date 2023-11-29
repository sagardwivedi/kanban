import { cookies } from 'next/headers';
import { createClient as server } from './supabase/server';

export async function getUserIdServer(): Promise<string> {
  const supabase = server(cookies());

  const { data } = await supabase.auth.getUser();

  return data.user?.id || '';
}
