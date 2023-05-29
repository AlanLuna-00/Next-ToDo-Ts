import { useContext, useState, Dispatch, SetStateAction } from "react";
import { Context, Task } from "@/context/TaskContext";
import { v4 as uuidv4 } from "uuid";

const useCreateTask = () => {
  const { tasks, setTasks } = useContext(Context) as { tasks: Task[]; setTasks: Dispatch<SetStateAction<Task[]>> }
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [priority, setPriority] = useState<"1" | "2" | "3">("1");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as "1" | "2" | "3");
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDay(e.target.value);
  };

  const handleHourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHour(e.target.value);
  };

  const createTask = () => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      text,
      priority,
      day,
      hour,
    };

    setTasks((prevTasks: Task[] | undefined) => {
      const tasksArray = Array.isArray(prevTasks) ? prevTasks : [];
      return [...tasksArray, newTask];
    });
    localStorage.setItem(
      "tasks",
      JSON.stringify([...tasks, newTask])
    );

    // Reset the form fields
    setTitle("");
    setText("");
    setPriority("1");
    setDay("");
    setHour("");
  };

  return {
    title,
    text,
    priority,
    day,
    hour,
    handleTitleChange,
    handleTextChange,
    handlePriorityChange,
    handleDayChange,
    handleHourChange,
    createTask,
  };
};

export default useCreateTask;
