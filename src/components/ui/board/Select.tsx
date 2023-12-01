'use client';

import { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useParams, useRouter } from 'next/navigation';
import classNames from 'classnames'; // Assuming you have a classnames library

import { Board } from '@/lib/definition';

export function Select({ boards }: { boards: Board[] }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedBoard, setSelectedBoard] = useState<Board | null>(null);
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

    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="relative w-36">
      <p
        onClick={handleClick}
        className={'flex cursor-pointer items-center justify-between gap-x-2'}
      >
        {selectedBoard ? selectedBoard.project_name : 'Select Board'}
        <ChevronDownIcon
          className={classNames('text-primary-color h-5 w-5', {
            'rotate-180': isOpen,
          })}
        />
      </p>
      {isOpen && (
        <div className="dark:bg-primary-background_dark bg-primary-background_light absolute top-8 w-full rounded-md p-2 shadow">
          {boards.map((board) => (
            <p
              key={board.project_id}
              onClick={() => handleBoardClick(board)}
              className={classNames(
                'dark:hover:bg-primary-color cursor-pointer rounded-md p-1 dark:hover:text-white',
              )}
            >
              {board.project_name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
