import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { Task } from "@/redux/taskReducer";
import { v4 as uuidv4 } from "uuid";
import useCreateTask from "@/hooks/useCreateTask";

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { onOpen } = useDisclosure();
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

  const { createTask } = useCreateTask();

  const handleSubmit = () => {
    const newTask: Task = {
      id: uuidv4(),
      status: false,
      title,
      description,
      priority,
      day,
      hour,
    };
    createTask(newTask);
    console.log(newTask);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} id="tasks">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Description"
                value={description}
                onChange={handleDescriptionChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Priority</FormLabel>
              <Select
                placeholder="Select Priority"
                value={priority}
                onChange={handlePriorityChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Day</FormLabel>
              <Select
                placeholder="Select Day"
                value={day}
                onChange={handleDayChange}
              >
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Hour</FormLabel>
              <Select
                placeholder="Select Hour"
                value={hour}
                onChange={handleHourChange}
              >
                <option value="9:00 AM">9:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleSubmit}
              disabled={!title || !description || !priority || !day || !hour}
            >
              Create
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateTaskModal;
