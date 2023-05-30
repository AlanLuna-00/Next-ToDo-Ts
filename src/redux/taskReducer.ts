import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: boolean;
  priority: string;
  day: string;
  hour: string;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const loadTasksFromLocalStorage = (): Task[] => {
  if (typeof window !== "undefined") {
    const tasksJson = localStorage.getItem("tasks");
    if (tasksJson) {
      return JSON.parse(tasksJson);
    }
  }
  return [];
};

const saveTasksToLocalStorage = (tasks: Task[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
};

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: loadTasksFromLocalStorage(),
  } as TaskState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<Task>) => {
        state.tasks.push(action.payload);
        saveTasksToLocalStorage(state.tasks);
      },
      prepare: (task: Omit<Task, "id">) => {
        return {
          payload: {
            ...task,
            id: uuidv4(),
          },
        };
      },
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    updateTask: (
      state,
      action: PayloadAction<{ taskId: string; updatedTask: Task }>
    ) => {
      const { taskId, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...updatedTask };
        saveTasksToLocalStorage(state.tasks);
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ taskId: string; status: boolean }>
    ) => {
      const { taskId, status } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        state.tasks[taskIndex].status = status;
        saveTasksToLocalStorage(state.tasks);
      }
    },
  },
});

export const { addTask, deleteTask, updateTask, changeStatus } =
  taskSlice.actions;

export default taskSlice.reducer;
