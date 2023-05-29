"use client"
import { useContext, useState, useEffect } from "react";
import { Context, Task } from "@/context/TaskContext";

const useCreateTask = () => {
  const context = useContext(Context);
  const [tasks, setTasks] = context || [{}, () => {}];

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [priority, setPriority] = useState<"1" | "2" | "3">("1");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as "1" | "2" | "3");
  };

  const createTask = (day: string) => {
    const newTasks: Task = { ...tasks };
    
    if (!newTasks[day]) {
      newTasks[day] = []; // Inicializar como un array vacío si no existe
    }
    
    newTasks[day] = [...newTasks[day], { title, text, priority }];
    console.log(newTasks)
    setTasks({...tasks, newTasks});
    localStorage.setItem("tasks", JSON.stringify(tasks));
  
    // Reset the form fields
    setTitle("");
    setText("");
    setPriority("1");
  };

  return {
    title,
    text,
    priority,
    handleTitleChange,
    handleTextChange,
    handlePriorityChange,
    createTask,
  };
};

export default useCreateTask;
