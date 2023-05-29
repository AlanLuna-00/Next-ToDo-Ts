import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

interface FormProps {
  title: string;
  text: string;
  priority: "1" | "2" | "3";
  day: string;
  hour: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handlePriorityChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleDayChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleHourChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: () => void;
}

const Form = ({
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
  handleSubmit,
}: FormProps) => {
  return (
    <>
      <FormControl isRequired>
        <FormLabel>Title</FormLabel>
        <Input placeholder="Title" value={title} onChange={handleTitleChange} />
      </FormControl>
      <FormControl>
        <Textarea
          placeholder="Description"
          value={text}
          onChange={handleTextChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Select Priority</FormLabel>
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
        <FormLabel>Select Day</FormLabel>
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
        <FormLabel>Select Hour</FormLabel>
        <Select
          placeholder="Select Hour"
          value={hour}
          onChange={handleHourChange}
        >
          <option value="09:00">09:00</option>
          <option value="12:00">12:00</option>
          <option value="15:00">15:00</option>
          <option value="18:00">18:00</option>
        </Select>
      </FormControl>
      <Button colorScheme="blue" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
};

export default Form;
