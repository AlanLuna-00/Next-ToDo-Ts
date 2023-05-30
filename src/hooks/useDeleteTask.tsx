import { useDispatch } from "react-redux";
import { deleteTask, updateTask, Task } from "../redux/taskReducer";
import { toast } from "react-hot-toast";

const useDeleteTask = () => {
  const dispatch = useDispatch();

  const deleteTaskById = (taskId: string) => {
    dispatch(deleteTask(taskId));
    toast.error("Task deleted");
  };

  return deleteTaskById;
};

export default useDeleteTask;
