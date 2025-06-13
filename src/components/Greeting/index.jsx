import React from "react";
import { Flex, Stack, Text } from "@mantine/core";
import { greeting } from "../../portfolio";
import HelloAnimation from "../Animations/HelloAnimation";
import FeelingProud from "../Icons/FeelingProud";

const Greeting = () => {
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
            {greeting.title} <HelloAnimation />
          </Text>
          <Text component="p" c="secondaryText" fw="bold" fz="h2">
            <Text component="span" fw="bold" fz="h2">
              I'm{" "}
            </Text>
            <Text component="span" c="accent" fw="bold" fz="h2">
              {greeting.full_name}{" "}
            </Text>
            {greeting.subTitle}
          </Text>
        </Stack>
      </Flex>

      {/* Right Section */}
      <Flex flex="1">
        <FeelingProud/>
      </Flex>
    </Flex>
  );
};

export default Greeting;
