import { v4 as uuidv4 } from 'uuid';
import { delay } from './utils';

interface DataItem {
  id: string;
  name: string;
}

let data: DataItem[] = [];

export async function createData(name: string): Promise<DataItem | string> {
  try {
    const newItem: DataItem = { id: uuidv4(), name };
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
