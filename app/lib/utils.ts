import { Board, Column, Task } from './definition';
import { boards } from './placeholder-data';

export const getTasks = (id: number): Column[] =>
  (boards.find((board) => board.id === id) || { columns: [] }).columns;

export const getBoards = (): Omit<Board, 'columns'>[] =>
  boards.map(({ id, name }) => ({ id, name }));

export const getBoardLength = (): number => boards.length;

export const getBoardName = (id: number): string =>
  (boards.find((board) => board.id === id) || { name: 'Board not found' }).name;

export const addBoardName = (name: string) => {
  const length = boards.length;
  const newBoard: Board = {
    id: length + 1,
    name: name,
    columns: [],
  };
  boards.push(newBoard);
};
