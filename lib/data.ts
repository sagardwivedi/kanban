import { v4 as uuidv4 } from 'uuid';
import { delay } from './utils';

interface SubTask {
  id: string;
  name: string;
  status: 'Pending' | 'Completed';
}

interface Task {
  id: string;
  name: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  subTasks: SubTask[];
}

interface DataItem {
  id: string;
  name: string;
  tasks: Task[];
}

let data: DataItem[] = [
  {
    id: uuidv4(),
    name: 'Board 1',
    tasks: [
      {
        id: uuidv4(),
        name: 'Task 1',
        status: 'Pending',
        subTasks: [
          { id: uuidv4(), name: 'Subtask 1', status: 'Pending' },
          { id: uuidv4(), name: 'Subtask 2', status: 'Completed' },
          { id: uuidv4(), name: 'Subtask 3', status: 'Pending' },
        ],
      },
      {
        id: uuidv4(),
        name: 'Task 2',
        status: 'In Progress',
        subTasks: [
          { id: uuidv4(), name: 'Subtask 1', status: 'Pending' },
          { id: uuidv4(), name: 'Subtask 2', status: 'Completed' },
          { id: uuidv4(), name: 'Subtask 3', status: 'Pending' },
        ],
      },
      {
        id: uuidv4(),
        name: 'Task 3',
        status: 'Completed',
        subTasks: [
          { id: uuidv4(), name: 'Subtask 1', status: 'Pending' },
          { id: uuidv4(), name: 'Subtask 2', status: 'Completed' },
          { id: uuidv4(), name: 'Subtask 3', status: 'Pending' },
        ],
      },
    ],
  },
  { id: uuidv4(), name: 'Board 2', tasks: [] },
  { id: uuidv4(), name: 'Board 3', tasks: [] },
];

export async function createData(name: string): Promise<DataItem | string> {
  try {
    const newItem: DataItem = { id: uuidv4(), name, tasks: [] };
    data.push(newItem);
    return await delay(newItem, 1000);
  } catch (error) {
    return 'Failed to create data.';
  }
}

export async function readAllData(): Promise<{
  data?: DataItem[];
  message?: string;
}> {
  try {
    return { data: await delay(data, 2000) };
  } catch (error) {
    return { message: 'Failed to read data.' };
  }
}

export async function updateData(
  id: string,
  newName: string,
): Promise<DataItem | string> {
  try {
    const index = data.findIndex((item) => item.id === id);
    if (index !== -1) {
      data[index].name = newName;
      return await delay(data[index], 1000);
    } else {
      return 'Item not found for update.';
    }
  } catch (error) {
    return 'Failed to update data.';
  }
}

export async function deleteData(id: string): Promise<boolean | string> {
  try {
    const index = data.findIndex((item) => item.id === id);
    if (index !== -1) {
      data.splice(index, 1);
      return await delay(true, 1000);
    } else {
      return 'Item not found for deletion.';
    }
  } catch (error) {
    return 'Failed to delete data.';
  }
}

/**
 * getBoardName is a function that retrieves the name of a board given its id.
 *
 * @param {string} id - The id of the board.
 *
 * @returns {string | undefined} The name of the board if found, otherwise undefined.
 *
 * @example
 *
 * const boardName = getBoardName('1234-5678-9101');
 * console.log(boardName); // Outputs the name of the board if found, otherwise undefined.
 */
export async function getBoardName(id: string): Promise<string | undefined> {
  const board = data.find((b) => b.id === id);
  return delay(board ? board.name : undefined, 2000);
}

/**
 * getTasks is a function that retrieves the tasks of a board given its id and status.
 *
 * @param {string} id - The id of the board.
 * @param {'Pending' | 'In Progress' | 'Completed'} status - The status of the tasks.
 *
 * @returns {{ data?: Task[]; message?: string } | undefined} The tasks of the board if found and have the given status, otherwise an error message or undefined if an error occurred.
 *
 * @example
 *
 * const tasks = getTasks('1234-5678-9101', 'Pending');
 * console.log(tasks); // Outputs the tasks of the board if found and have the given status, otherwise an error message or undefined.
 */
export async function getTasks(
  id: string,
  status: 'Pending' | 'In Progress' | 'Completed',
): Promise<{ data?: Task[]; message?: string } | undefined> {
  try {
    const board = data.find((b) => b.id === id);

    if (!board) {
      return { message: 'Board not found' };
    }

    const filterTasks = board.tasks.filter((t) => t.status === status);

    if (!filterTasks.length) {
      return { message: 'No tasks found with the given status' };
    }
    return { data: await delay(filterTasks, 2000) };
  } catch (error) {
    return { message: 'An error occurred while retrieving tasks' };
  }
}
