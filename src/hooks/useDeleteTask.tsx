import { useDispatch } from "react-redux";
import { deleteTask, updateTask, Task } from "../redux/taskReducer";

const useDeleteTask = () => {
  const dispatch = useDispatch();

  const deleteTaskById = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

  return deleteTaskById;
};

export default useDeleteTask;
