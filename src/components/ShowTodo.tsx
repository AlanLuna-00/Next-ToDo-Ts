import React from "react";
import { Box, Heading, Text, IconButton } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { Task, deleteTask, updateTask } from "../redux/taskReducer";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

interface ShowTasksProps {
  selectedDay: string;
}

const ShowTasks: React.FC<ShowTasksProps> = ({ selectedDay }) => {
  const tasks = useSelector((state: RootState) => state.tasks);
  console.log(tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task: Task) => task.day === selectedDay);

  const handleDelete = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

  const handleUpdate = (taskId: string, updatedTask: Partial<Task>) => {
    dispatch(updateTask({ taskId, updatedTask: updatedTask as Task }));
  };

  return (
    <Box p="4">
      <Heading as="h1" size="xl" mb="4">
        Tasks
      </Heading>
      {filteredTasks.length === 0 ? (
        <Heading color="white">No tasks for this day</Heading>
      ) : (
        filteredTasks.map((task: Task) => {
          return (
            <Box key={task.id} p="4" bg="gray.800" borderRadius="md" mb="4">
              <Heading as="h2" size="lg" color="white" mb="2">
                {task.title}
              </Heading>
              <Text color="white" mb="2">
                {task.description}
              </Text>
              <Text color="white">Priority: {task.priority}</Text>
              <Text color="white">Day: {task.day}</Text>
              <Text color="white">Hour: {task.hour}</Text>
              <IconButton
                aria-label="Delete"
                icon={<AiOutlineDelete />}
                colorScheme="red"
                onClick={() => handleDelete(task.id)}
                mt="2"
              />
              <IconButton
                aria-label="Edit"
                icon={<FiEdit />}
                colorScheme="blue"
                onClick={() =>
                  handleUpdate(task.id, {
                    title: "Updated Title",
                  } as Partial<Task>)
                }
                mt="2"
                ml="2"
              />
            </Box>
          );
        })
      )}
    </Box>
  );
};

export default ShowTasks;
