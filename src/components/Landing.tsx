import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

const Landing = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="#070517"
      color="white"
      px={8}
    >
      <Heading as="h1" size="2xl" mb={6}>
        Welcome to Todo's App
      </Heading>
      <Text fontSize="xl" mb={8}>
        Manage your tasks with ease.
      </Text>
      <ScrollLink to="tasks" smooth={true} duration={500} offset={-100}>
        <Button
          size="lg"
          colorScheme="teal"
          px={8}
          py={4}
          rounded="full"
          _hover={{ bg: "teal.600" }}
        >
          Get Started
        </Button>
      </ScrollLink>
    </Box>
  );
};

export default Landing;
