import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea, 
} from "@chakra-ui/react";
import useCreateTask from "@/hooks/useCreateTask";

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateTaskModal = ({ isOpen, onClose }: CreateTaskModalProps) => {
  const { onOpen } = useDisclosure();
  const {
    title,
    text,
    priority,
    day,
    hour,
    handleTitleChange,
    handleTextChange,
    handlePriorityChange,
    handleDayChange,
    handleHourChange,
    createTask,
  } = useCreateTask();

  const handleSubmit = () => {
    createTask();
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
<Textarea
             placeholder="Description"
             value={text}
             onChange={handleTextChange}
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
<option value="08:00">08:00</option>
<option value="09:00">09:00</option>
<option value="10:00">10:00</option>
<option value="11:00">11:00</option>
<option value="12:00">12:00</option>
<option value="13:00">13:00</option>
<option value="14:00">14:00</option>
</Select>
</FormControl>
</ModalBody>
<ModalFooter>
<Button colorScheme="blue" mr={3} onClick={handleSubmit}>
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
