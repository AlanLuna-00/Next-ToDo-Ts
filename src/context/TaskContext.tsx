"use client"
import React, { useState, useEffect, createContext, ReactNode, Dispatch, SetStateAction } from 'react';

export const Context = createContext<[Task, Dispatch<SetStateAction<Task>>] | undefined>(undefined);

export type Task = {
  [day: string]: {
    title: string;
    text: string;
    priority: "1" | "2" | "3";
  }[];
};

interface TaskContextProps {
  children: ReactNode;
}

const TaskContext = ({ children }: TaskContextProps) => {
  const [tasks, setTasks] = useState<Task>(() => {
    const storedTasks = typeof window !== 'undefined' ? localStorage.getItem('tasks') : null;
    try {
      return storedTasks ? JSON.parse(storedTasks) : {
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: [],
      };
    } catch (error) {
      console.error('Error parsing stored tasks:', error);
      return {
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: [],
      };
    }
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Context.Provider value={[tasks, setTasks]}>
      {children}
    </Context.Provider>
  );
};

export default TaskContext;
