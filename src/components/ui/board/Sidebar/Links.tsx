import { ActiveLink } from '@/components/ActiveLink';
import { getBoards } from '@/lib/data';
import { NewBoardButton } from '../buttons';

export async function Links() {
  const boards = await getBoards();

  return (
    <>
      <h2 className="my-2 pl-8 tracking-widest text-black dark:text-white/50">
        ALL BOARDS ({boards.length})
      </h2>
      <div>
        <>
          {boards.map((board) => (
            <ActiveLink
              href={`/board/${board.project_id}`}
              text={board.project_name}
              key={board.project_id}
            />
          ))}
          <NewBoardButton />
        </>
      </div>
    </>
  );
}
