import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Board, Column, Task } from './definition';
import { createClient } from './supabase/server';
import { getUserIdServer } from './utils';

export async function getBoards(): Promise<Omit<Board, 'tasks'>[]> {
  try {
    const supabase = createClient(cookies());
    const id = await getUserIdServer();

    const { data, error } = await supabase
      .from('projects')
      .select('project_id, project_name')
      .eq('user_id', id);

    if (error) {
      throw new Error(`Supabase error: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching projects:', error);

    throw error;
  }
}

export async function getColumns(project_id: string): Promise<Column[]> {
  const supabase = createClient(cookies());

  const { data } = await supabase
    .from('columns')
    .select('id, column_name')
    .eq('project_id', project_id);

  if (data === null) {
    return redirect('/board?message=Something went wrong');
  }

  return data;
}

export async function getTasks(project_id: string): Promise<Task[]> {
  const supabase = createClient(cookies());

  const { data, error } = await supabase
    .from('tasks')
    .select(
      'task_id, task_name, description, status, subtasks(subtask_id, subtask_name, status)',
    )
    .eq('project_id', project_id);

  if (error) {
    return redirect('/board?message=Something went wrong');
  }

  if (data === null) {
    return redirect('/board?message=No Tasks');
  }

  return data;
}
