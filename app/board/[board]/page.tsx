import { IndividualHeader } from '@/components/board/IndividualHeader';
import { KanbanBoard } from '@/components/board/KanbanBoard';
import { Suspense } from 'react';

export default function Page({ params }: { params: { board: string } }) {
  const board = params.board;

  return (
    <main className="divide-y divide-primary-text">
      <Suspense>
        <IndividualHeader id={board} />
      </Suspense>
      <div className='p-4 pr-0'>
        <KanbanBoard id={board} />
      </div>
    </main>
  );
}
