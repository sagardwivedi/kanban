import { Board, Column } from './definition';
import { boards } from './placeholder-data';

export const getTasks = (id: number): Column[] =>
  (boards.find((board) => board.id === id) || { columns: [] }).columns;

export const getBoards = (): Omit<Board, 'columns'>[] =>
  boards.map(({ id, name }) => ({ id, name }));

export const getBoardLength = (): number => boards.length;

export const getBoardName = (id: number): string =>
  (boards.find((board) => board.id === id) || { name: 'Board not found' }).name;
