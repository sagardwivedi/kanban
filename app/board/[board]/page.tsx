import { IndividualHeader } from '@/components/board/IndividualHeader';

export default function Page({ params }: { params: { board: string } }) {
  const board = params.board;
  return (
    <main>
      <IndividualHeader id={board} />
      <div>{board}</div>
    </main>
  );
}
