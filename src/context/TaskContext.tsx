import React, { createContext, ReactNode, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface Task {
  id: string;
  title: string;
  text: string;
  priority: "1" | "2" | "3";
  day: string;
  hour: string;
}

interface TaskContextProps {
  children: ReactNode;
}

interface TaskContextValue {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

export const Context = createContext<TaskContextValue | undefined>(undefined);

const TaskContext = ({ children }: TaskContextProps) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const contextValue: TaskContextValue = {
    tasks,
    setTasks,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default TaskContext;
