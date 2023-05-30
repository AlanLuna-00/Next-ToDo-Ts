import React, { useState, useEffect } from "react";
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
  Text,
} from "@chakra-ui/react";
import useCreateTask from "@/hooks/useCreateTask";
import validationForm from "@/utils/validationForm";
interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  setSelectedDay: React.Dispatch<React.SetStateAction<string>>;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
  isOpen,
  onClose,
  setSelectedDay,
}) => {
  const {
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
  } = useCreateTask({ onClose });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    priority: "",
    day: "",
    hour: "",
  });

  useEffect(() => {
    const { isValid, errors } = validationForm({
      title,
      description,
      priority,
      day,
      hour,
    });
    setErrors(errors);
  }, [title, description, priority, day, hour]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent h={"fit-content"} textColor={"white"}>
        <ModalHeader>Create Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
              isInvalid={!!errors.title}
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
              value={description}
              onChange={handleDescriptionChange}
              isInvalid={!!errors.description}
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
              value={priority}
              onChange={handlePriorityChange}
              isInvalid={!!errors.priority}
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
              value={day}
              onChange={handleDayChange}
              isInvalid={!!errors.day}
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
              value={hour}
              onChange={handleHourChange}
              isInvalid={!!errors.hour}
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
            color={"white"}
            textColor={"#1A202C"}
            mr={3}
            onClick={() => {
              const { isValid } = validationForm({
                title,
                description,
                priority,
                day,
                hour,
              });
              if (isValid) {
                createTask();
                setSelectedDay(day);
              }
            }}
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
  );
};

export default CreateTaskModal;
