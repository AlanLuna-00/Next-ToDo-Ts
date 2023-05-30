import React, { useState } from "react";
import { Box, Button, Flex, Container } from "@chakra-ui/react";
import CreateTaskModal from "@/components/CreateTaskModal";
import ShowTodos from "./ShowTodo";
import { Toaster } from "react-hot-toast";

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
  const [selectedDay, setSelectedDay] = useState("Monday");

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
        <Box bg="#070517" h="100vh" w="200px" p="4">
          {days.map((day) => (
            <Button
              key={day}
              onClick={() => handleDayClick(day)}
              backgroundColor={selectedDay === day ? "teal.400" : "gray.600"}
              variant="ghost"
              marginTop="10px"
            >
              {day}
            </Button>
          ))}
        </Box>
        <Box flex="1" p="4">
          <Button onClick={handleOpenModal}>Create Task</Button>

          <Box alignContent={"flex-end"}>
            <CreateTaskModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              setSelectedDay={setSelectedDay}
            />
          </Box>

          <ShowTodos selectedDay={selectedDay} />
        </Box>
      </Flex>
      <Toaster />
    </div>
  );
};

export default Home;
