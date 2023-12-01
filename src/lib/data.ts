import { cookies } from 'next/headers';
import { Board } from './definition';
import { createClient } from './supbase/server';

export async function getUserId(): Promise<string> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data } = await supabase.auth.getUser();

  return data.user?.id || '';
}

export async function getBoards(): Promise<Board[]> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const id = await getUserId();

  const { data } = await supabase
    .from('projects')
    .select('project_id, project_name')
    .eq('user_id', id);

  return data || [];
}
