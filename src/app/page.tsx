"use client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store, { RootState } from "../redux/store";
import Home from "@/components/Home";
import Navbar from "../components/Navbar";
import Landing from "@/components/Landing";
import { Toaster } from "react-hot-toast";

export default function HomePage() {
  return (
    <div>
      <Provider store={store as any}>
        <ChakraProvider>
          <Navbar />
          <Landing />
          <Home />
          <Toaster />
        </ChakraProvider>
      </Provider>
    </div>
  );
}
