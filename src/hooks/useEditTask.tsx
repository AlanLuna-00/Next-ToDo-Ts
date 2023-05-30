import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Task, updateTask } from "../redux/taskReducer";
import { toast } from "react-hot-toast";

interface ShowTasksProps {
  selectedDay: string;
}

const useEditTask = () => {
  const [editedTaskId, setEditedTaskId] = useState("");
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedPriority, setEditedPriority] = useState("");
  const [editedDay, setEditedDay] = useState("");
  const [editedHour, setEditedHour] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);

  const dispatch = useDispatch();

  const openEditModal = (task: Task) => {
    setEditedTaskId(task.id);
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setEditedPriority(task.priority);
    setEditedDay(task.day);
    setEditedHour(task.hour);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const saveEditedTask = () => {
    const updatedTask: Partial<Task> = {
      title: editedTitle,
      description: editedDescription,
      priority: editedPriority,
      day: editedDay,
      hour: editedHour,
    };

    dispatch(
      updateTask({ taskId: editedTaskId, updatedTask: updatedTask as Task })
    );
    setEditModalOpen(false);
    toast.success("Task updated");
  };

  return {
    editedTitle,
    editedDescription,
    editedPriority,
    editedDay,
    editedHour,
    editModalOpen,
    openEditModal,
    closeEditModal,
    saveEditedTask,
    setEditedTitle,
    setEditedDescription,
    setEditedPriority,
    setEditedDay,
    setEditedHour,
  };
};

export default useEditTask;
