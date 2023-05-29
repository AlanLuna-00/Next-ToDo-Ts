"use client"
import React from "react";
import { ChakraProvider } from '@chakra-ui/react'

import Home from "@/components/Home";

export default function HomePage() {
  return (
    <div>
     
      <ChakraProvider>
      <Home />
      </ChakraProvider>
    </div>
  );
}
