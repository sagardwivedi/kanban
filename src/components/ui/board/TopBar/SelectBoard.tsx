'use client';

import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


import { useOutsideClickListener } from '@/hooks/useOutSideClickListener';
import { Board } from '@/lib/definition';
import { cn } from '@/lib/utils';
import { useBoardModal } from '@/hooks/useBoardModal';

export function NewBoard() {
  const { onOpen } = useBoardModal();

  return (
    <button onClick={onOpen} className="p-1 text-primary-color">
     + New Board
    </button>
  );
}

export function SelectBoard({ boards }: { boards: Board[] }) {
  const [selectedBoard, setSelectedBoard] = useState<Board | null>(null);
  const { isOpen, selectOptionRef, toggle } = useOutsideClickListener();
  const { push } = useRouter();
  const params = useParams();

  useEffect(() => {
    const boardWithId = boards.find((board) => board.project_id === params.id);
    if (boardWithId) {
      setSelectedBoard(boardWithId);
    }
  }, [params.id, boards]);

  const handleBoardClick = (board: Board) => {
    if (params.id !== board.project_id) {
      push(`/board/${board.project_id}`);
    }

    if (selectedBoard?.project_id !== board.project_id) {
      setSelectedBoard(board);
    }

    toggle();
  };

  return (
    <div className="relative w-36" ref={selectOptionRef}>
      <p
        onClick={toggle}
        className={'flex text-2xl font-bold cursor-pointer items-center justify-between gap-x-2'}
      >
        {selectedBoard ? selectedBoard.project_name : 'Select Board'}
        <ChevronDownIcon
          className={cn('h-5 w-5 text-primary-color', {
            'rotate-180': isOpen,
          })}
        />
      </p>
      {isOpen && (
        <div className="absolute top-8 w-full rounded-md bg-primary-background_light p-2 shadow dark:bg-primary-background_dark">
          <>
            {boards.map((board) => (
              <p
                key={board.project_id}
                onClick={() => handleBoardClick(board)}
                className={
                  'cursor-pointer rounded-md p-1 dark:hover:bg-primary-color dark:hover:text-white'
                }
              >
                {board.project_name}
              </p>
            ))}
            <NewBoard />
          </>
        </div>
      )}
    </div>
  );
}
