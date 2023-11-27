import { Board, Column } from './definition';
import { boards } from './placeholder-data';

export function getTasks(id: number): Promise<Column[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const board = boards.find((board) => board.id === id);
      resolve(board ? board.columns : []);
    }, 1000); // Delay of 1000 milliseconds (1 second)
  });
}

export function getBoards(): Promise<Omit<Board, 'columns'>[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        boards.map((b) => ({
          id: b.id,
          name: b.name,
        })),
      );
    }, 1000); // Delay of 1000 milliseconds (1 second)
  });
}

export function getBoardLength(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(boards.length);
    }, 1000);
  });
}

export function getBoardName(id: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Assuming 'boards' is an array of objects with a property 'id'
      const filteredBoards = boards.filter((board) => board.id === id);
      const boardName =
        filteredBoards.length > 0 ? filteredBoards[0].name : 'Board not found';
      resolve(boardName);
    }, 2000);
  });
}
