import { Flex, useColorMode } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import HypeLogo from "../components/HypeLogo";
import { HyperspaceClient } from "hyperspace-client-js";
import { Title } from "../components/Title";
import axios from "axios";
import { useEffect } from "react";
import { HyperGrid } from "../components/Grid";

const Index = () => {
  const { colorMode } = useColorMode();

  // API client for accessing Hyperspace data
  const hyperClient = new HyperspaceClient(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGRSBJbnRlcnZpZXciLCJuYW1lIjoiSHlwZXJzcGFjZSIsImlhdCI6MTUxNjIzOTAyMn0.HDfB97Y1pgQqQ6GshXsh5nz7fA1_ban9MTZDAbgobJk"
  );

  return (
    <Container height="100vh">
      <Flex w={"100%"} h={"80px"} alignItems={"center"} px={4}>
        <HypeLogo
          fillColor={colorMode === "dark" ? "white" : "black"}
          height={30}
        />
      </Flex>

      {/* Using our Hyperspace data, build out something cool for us to review together! */}

      <DarkModeSwitch />
      <Title />
      <HyperGrid />
      </Container>
  );
};

export default Index;
