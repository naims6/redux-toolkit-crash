import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
}

interface TaskManagement {
  items: Task[];
  searchTerm: string;
  filterStatus: string;
}

const initialState: TaskManagement = {
  items: [
    {
      id: 1,
      title: "Build login UI",
      description: "Create responsive login page with validation",
      status: "In Progress",
      priority: "High",
    },
    {
      id: 2,
      title: "Setup Redux store",
      description: "Configure Redux Toolkit and slices",
      status: "Done",
      priority: "Medium",
    },
    {
      id: 3,
      title: "Design dashboard",
      description: "Create layout for main dashboard",
      status: "Todo",
      priority: "Low",
    },
    {
      id: 4,
      title: "API integration",
      description: "Connect frontend with backend endpoints",
      status: "Todo",
      priority: "High",
    },
  ],
  searchTerm: "",
  filterStatus: "all",
};

export const taskSlice = createSlice({
  name: "taskManagement",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.items.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const newItems = state.items.filter((t) => t.id !== action.payload);
      state.items = newItems;
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      console.log(action);
      const isMatched = state.items.findIndex(
        (d) => action.payload.id === d.id,
      );
      console.log(isMatched);

      state.items[isMatched] = { ...state.items[isMatched], ...action.payload };
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export const selectItems = (state: RootState) => state.task.items;
export default taskSlice.reducer;
