import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { Task } from "@/redux/taskReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { deleteTask, changeStatus } from "@/redux/taskReducer";
import { AiOutlineDelete } from "react-icons/ai";
import { Box, Heading, Text, IconButton } from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import useEditTask from "@/hooks/useEditTask";
import validateForm from "@/utils/validationForm";

interface ShowTasksProps {
  selectedDay: string;
}

const ShowTasks: React.FC<ShowTasksProps> = ({ selectedDay }) => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task: Task) => task.day === selectedDay);

  const handleDelete = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

  const handleChangeStatus = (taskId: string, status: boolean) => {
    dispatch(changeStatus({ taskId, status }));
  };
  const {
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
  } = useEditTask();

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    priority: "",
    day: "",
    hour: "",
  });

  useEffect(() => {
    const { isValid, errors } = validateForm({
      title: editedTitle,
      description: editedDescription,
      priority: editedPriority,
      day: editedDay,
      hour: editedHour,
    });
    setErrors(errors);
  }, [editedTitle, editedDescription, editedPriority, editedDay, editedHour]);

  return (
    <Box p="4">
      <Heading as="h1" size="xl" mb="4" color={"white"} id="tasks">
        Tasks
      </Heading>
      {filteredTasks.length === 0 ? (
        <Heading color="white">No tasks for {selectedDay} </Heading>
      ) : (
        filteredTasks.map((task: Task) => {
          return (
            <Box key={task.id} p="4" bg="gray.800" borderRadius="md" mb="4">
              <Heading
                as="h2"
                size="lg"
                mb="2"
                className={`${
                  task.status ? "line-through text-slate-400" : "text-white"
                }`}
              >
                {task.title}
              </Heading>
              <Text color="white" mb="2" fontSize={"20px"}>
                {task.description}
              </Text>
              <Text
                w="fit-content"
                p="1"
                borderRadius="md"
                color="white"
                px="2"
                className={`${
                  task.priority === "1"
                    ? "bg-red-500"
                    : task.priority === "2"
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
              >
                {task.priority}
              </Text>
              <Text color="white">{task.day}</Text>
              <Text color="white">{task.hour} 🕘</Text>
              <Checkbox
                isChecked={task.status}
                size={"lg"}
                onChange={(e) => handleChangeStatus(task.id, e.target.checked)}
              >
                {task.status ? "Completed" : "Pending"}
              </Checkbox>
              <br />
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
                onClick={() => openEditModal(task)}
                mt="2"
                ml="2"
              />
            </Box>
          );
        })
      )}

      <Modal isOpen={editModalOpen} onClose={closeEditModal} id="tasks">
        <ModalOverlay />
        <ModalContent h={"fit-content"} textColor={"white"}>
          <ModalHeader>Edit Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Title"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              {errors.title && (
                <Text color="red.500" fontSize="sm">
                  {errors.title}
                </Text>
              )}
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Description"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
              {errors.description && (
                <Text color="red.500" fontSize="sm">
                  {errors.description}
                </Text>
              )}
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Priority</FormLabel>
              <Select
                placeholder="Select Priority"
                value={editedPriority}
                onChange={(e) => setEditedPriority(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
              {errors.priority && (
                <Text color="red.500" fontSize="sm">
                  {errors.priority}
                </Text>
              )}
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Day</FormLabel>
              <Select
                placeholder="Select Day"
                value={editedDay}
                onChange={(e) => setEditedDay(e.target.value)}
              >
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </Select>
              {errors.day && (
                <Text color="red.500" fontSize="sm">
                  {errors.day}
                </Text>
              )}
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Hour</FormLabel>
              <Select
                placeholder="Select Hour"
                value={editedHour}
                onChange={(e) => setEditedHour(e.target.value)}
              >
                <option value="9:00 AM">9:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
              </Select>
              {errors.hour && (
                <Text color="red.500" fontSize="sm">
                  {errors.hour}
                </Text>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                const { isValid } = validateForm({
                  title: editedTitle,
                  description: editedDescription,
                  priority: editedPriority,
                  day: editedDay,
                  hour: editedHour,
                });
                if (isValid) {
                  saveEditedTask();
                }
              }}
              disabled={
                !editedTitle ||
                !editedDescription ||
                !editedPriority ||
                !editedDay ||
                !editedHour
              }
            >
              Save
            </Button>
            <Button variant="ghost" onClick={closeEditModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ShowTasks;
