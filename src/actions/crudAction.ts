'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { BoardField } from '@/components/ui/board/Sidebar/BoardModal';
import { TaskField } from '@/components/ui/board/TopBar/NewTaskModal';
import { getUserId } from '@/lib/data';
import { createClient } from '@/lib/supbase/server';

export async function postBoard(formData: BoardField) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const id = await getUserId();

  await supabase
    .from('projects')
    .insert({ project_name: formData.board, user_id: id });

  revalidatePath('/board');
}

export async function deleteBoard(id: string) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  await supabase.from('projects').delete().eq('project_id', id);

  revalidatePath('/board');
  redirect('/board');
}

export async function postTask(id: string, task: TaskField) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // Insert the main task into the 'tasks' table and retrieve the inserted data
  const { data } = await supabase
    .from('tasks')
    .insert({
      task_name: task.task_name,
      description: task.description,
      status: task.status,
      project_id: id,
    })
    .select()
    .single();

  // Insert each subtask from the 'subtasks' array into the 'subtasks' table
  if (data) {
    const subtaskInsertPromises = task.subtasks.map(async (subtaskName) => {
      await supabase.from('subtasks').insert({
        task_id: data.task_id,
        subtask_name: subtaskName.subtask_name,
      });
    });

    // Wait for all subtask insertions to complete
    await Promise.all(subtaskInsertPromises);
  }

  // Revalidate the path for the '/board/${id}' route, possibly for updating the UI
  revalidatePath(`/board/${id}`);
}

export async function deleteTask(id: string) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  await supabase.from('tasks').delete().eq('task_id', id);

  revalidatePath('/board');
}
