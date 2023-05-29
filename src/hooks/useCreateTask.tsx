import { useDispatch } from "react-redux";
import { addTask } from "@/redux/taskReducer";
import { Task } from "@/redux/taskReducer";
import { v4 as uuidv4 } from "uuid";

const useCreateTask = () => {
  const dispatch = useDispatch();

  const createTask = (newTask: Task) => {
    dispatch(addTask(newTask));
  };

  return { createTask }; // Devolver createTask como parte del objeto
};

export default useCreateTask;
