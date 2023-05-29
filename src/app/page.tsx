"use client"
import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import TaskContext from "@/context/TaskContext";

import Home from "@/components/Home";

export default function HomePage() {
  return (
    <div>
     
     <TaskContext>
      <ChakraProvider>
      <Home />
      </ChakraProvider>
      </TaskContext>
    </div>
  );
}
