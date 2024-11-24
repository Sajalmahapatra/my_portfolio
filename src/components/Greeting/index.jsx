import React from "react";
import { Flex, Stack, Text, useMantineColorScheme } from "@mantine/core";
import { greeting } from "../../portfolio";

const Greeting = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Flex
      direction={{ base: "column", sm: "row" }}
      gap={{ base: "sm", sm: "lg" }}
      justify={{ sm: "flex-start" }}
    >
      {/* Left Section */}
      <Flex flex="1">
        <Stack justify="center" gap="md">
          <Text component="h1" fw="bold" fz="h1">
            {greeting.title}
          </Text>
          <Text
            component="p"
            c={colorScheme === "light" ? "#7F8DAA" : "#8D8D8D"}
            fw="bold"
            fz="h2"
          >
            <Text component="span" fw="bold" fz="h2">
              I'm{" "}
            </Text>
            <Text component="span" c="#E3405F" fw="bold" fz="h2">
              {greeting.full_name}{" "}
            </Text>
            {greeting.subTitle}
          </Text>
        </Stack>
      </Flex>

      {/* Right Section */}
      <Flex flex="1">2</Flex>
    </Flex>
  );
};

export default Greeting;
