"use client"
import React from "react";
import { Button, Container } from "@chakra-ui/react";
import CreateTaskModal from "@/components/CreateTaskModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container maxW="md">
      <Button onClick={handleOpenModal}>Create Task
        <CreateTaskModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </Button>
    </Container>
  );
};

export default Home;
