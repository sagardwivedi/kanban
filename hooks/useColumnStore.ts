import { create } from 'zustand';

interface ColumnStore {
  columns: Record<string, string>;
  addColumn: (columnName: string, color: string) => void;
}

const useColumnStore = create<ColumnStore>()((set) => ({
  columns: {},
  addColumn: (columnName, color) =>
    set((state) => ({
      columns: { ...state.columns, [columnName]: color },
    })),
}));

export default useColumnStore;
