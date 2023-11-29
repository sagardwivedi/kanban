import { getBoards } from '../lib/data';
import { ActiveLink } from './active-link';
import { NewBoardButton } from './buttons';

export async function Nav() {
  const boards = await getBoards();

  return (
    <div>
      <div className="flex flex-row items-center gap-2 pl-5 text-xs tracking-wider text-white/50">
        <p>ALL BOARDS ({boards.length})</p>
      </div>
      <div className="mt-2 flex flex-col gap-y-1">
        {boards.map((board) => (
          <ActiveLink
            href={`/board/${board.project_id}`}
            text={board.project_name}
            key={board.project_id}
          />
        ))}
        <NewBoardButton />
      </div>
    </div>
  );
}
