'use server';

import { BoardField } from '@/components/ui/board/Sidebar/BoardModal';
import { getUserId } from '@/lib/data';
import { createClient } from '@/lib/supbase/server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

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
