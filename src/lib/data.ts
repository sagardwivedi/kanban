import { cookies } from 'next/headers';
import { Board, Task } from './definition';
import { createClient } from './supbase/server';
import { PostgrestError } from '@supabase/supabase-js';

export async function getUserId(): Promise<string> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data } = await supabase.auth.getUser();

  return data.user?.id || '';
}

export async function getBoardName(id: string): Promise<string> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data } = await supabase
    .from('projects')
    .select('project_name')
    .eq('project_id', id)
    .single();

  return data?.project_name || '';
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

export async function checkBoardExists(project_id: string) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data } = await supabase
    .from('projects')
    .select()
    .eq('project_id', project_id)
    .single();

  return data !== null;
}

interface ReturnType {
  data: Task[] | null;
  error: PostgrestError | null;
}

export async function getTasks(id: string): Promise<ReturnType> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from('tasks')
    .select(
      'description,status,task_id,task_name, subtasks(status,subtask_id,subtask_name)',
    )
    .eq('project_id', id);

  return { data, error };
}
