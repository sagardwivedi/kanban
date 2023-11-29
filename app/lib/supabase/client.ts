import { createBrowserClient } from '@supabase/ssr';
import { Database } from '../database.types';

export const createClient = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

export async function getUserIdClinet(): Promise<string> {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  return data.user?.id || '';
}
