import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "@/redux/taskReducer";
import { Task } from "@/redux/taskReducer";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

interface useCreateTaskProps {
  onClose: () => void;
}

const useCreateTask = ({ onClose }: useCreateTaskProps) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value);
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
      status: false,
      title,
      description,
      priority,
      day,
      hour,
    };
    dispatch(addTask(newTask));
    console.log(newTask);
    // clear inputs
    setTitle("");
    setDescription("");
    setPriority("");
    setDay("");
    setHour("");
    onClose();
    toast.success("Task created successfully");
  };

  return {
    title,
    description,
    priority,
    day,
    hour,
    handleTitleChange,
    handleDescriptionChange,
    handlePriorityChange,
    handleDayChange,
    handleHourChange,
    createTask,
  };
};

export default useCreateTask;
