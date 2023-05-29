"use client";
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
} from "@chakra-ui/react";
import Form from "./Form";
import useCreateTask from "@/hooks/useCreateTask";

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: string;
}

const CreateTaskModal = ({ isOpen, onClose, day }: CreateTaskModalProps) => {
  const { onOpen } = useDisclosure();
  const {
    title,
    text,
    priority,
    handleTitleChange,
    handleTextChange,
    handlePriorityChange,
    createTask,
  } = useCreateTask();

  const handleSubmit = () => {
    createTask(day);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Create Task</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form
              title={title}
              text={text}
              priority={priority}
              handleTitleChange={handleTitleChange}
              handleTextChange={handleTextChange}
              handlePriorityChange={handlePriorityChange}
              handleSubmit={handleSubmit} // Agregué la propiedad handleSubmit
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Post
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
