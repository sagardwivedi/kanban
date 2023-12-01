import { Button } from '@/components/Button';
import { createClient } from '@/lib/supbase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Board() {
  return (
    <main className="mx-auto flex h-full max-w-xs items-center justify-center">
      <form
        action={async () => {
          'use server';

          const cookieStore = cookies();
          const supabase = createClient(cookieStore);

          await supabase.auth.signOut();

          redirect('/login');
        }}
      >
        <Button text="log out" />
      </form>
    </main>
  );
}
