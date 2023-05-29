"use client";
import React, { useState } from "react";
import { Box, Button, Flex, Container } from "@chakra-ui/react";
import CreateTaskModal from "@/components/CreateTaskModal";
import ShowTodos from "./ShowTodo";
import { Task } from "@/redux/taskReducer";

const Home = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
  };

  return (
    <div className="taskContainer" id="tasks">
      <Flex>
        <Box bg="gray.800" h="100vh" w="200px" p="4">
          {days.map((day) => (
            <Button
              key={day}
              onClick={() => handleDayClick(day)}
              backgroundColor={selectedDay === day ? "gray.100" : "gray.700"}
              variant="ghost"
              marginTop="10px"
            >
              {day}
            </Button>
          ))}
        </Box>
        <Box flex="1" p="4">
          <Button onClick={handleOpenModal}>Create Task</Button>
          <CreateTaskModal isOpen={isModalOpen} onClose={handleCloseModal} />
          <ShowTodos selectedDay={selectedDay} />
        </Box>
      </Flex>
    </div>
  );
};

export default Home;
