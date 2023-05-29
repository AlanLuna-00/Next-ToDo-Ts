"use client"
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
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handlePriorityChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: () => void;
}

const Form = ({
  title,
  text,
  priority,
  handleTitleChange,
  handleTextChange,
  handlePriorityChange,
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
      <Button colorScheme="blue" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
};

export default Form;
