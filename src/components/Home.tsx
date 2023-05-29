"use client"
import React from "react";
import { Button, Container } from "@chakra-ui/react";
import CreateTaskModal from "@/components/CreateTaskModal";
import ShowTodos from './ShowTodo';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container maxW="md" id="tasks">
      <Button onClick={handleOpenModal}>Create Task
        <CreateTaskModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </Button>
        <ShowTodos />
    </Container>
  );
};

export default Home;
