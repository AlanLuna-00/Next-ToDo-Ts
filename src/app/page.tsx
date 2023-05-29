"use client"
import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import TaskContext from "@/context/TaskContext";
import Landing from "@/components/Landing";

import Home from "@/components/Home";
import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <div>
     
     <TaskContext>
      <ChakraProvider>
      <Navbar />
      <Landing />
      <Home />
      </ChakraProvider>
      </TaskContext>
    </div>
  );
}
