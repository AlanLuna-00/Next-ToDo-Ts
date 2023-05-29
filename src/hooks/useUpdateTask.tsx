import { useDispatch } from "react-redux";
import { updateTask, Task } from "../redux/taskReducer";

const useUpdateTask = () => {
  const dispatch = useDispatch();

  const updateTaskById = (taskId: string, updatedTask: Task) => {
    dispatch(updateTask({ taskId, updatedTask }));
  };

  return updateTaskById;
};

export default useUpdateTask;
