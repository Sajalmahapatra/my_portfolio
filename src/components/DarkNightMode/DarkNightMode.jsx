import React from "react";
import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import FadeIn from "../Animations/FadeIn";

const DarkNightMode = () => {
  const { toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const iconStyles = {
    width: "22px",
    height: "22px",
    display: "block",
  };
  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      variant="default"
      radius="md"
      color={computedColorScheme === "dark" ? "white" : "black"}
      size="lg"
      aria-label="Toggle color scheme"
    >
      <FadeIn key={computedColorScheme} duration={0.5}>
        {computedColorScheme === "dark" ? (
          <IconMoon style={iconStyles} />
        ) : (
          <IconSun style={iconStyles} />
        )}
      </FadeIn>
    </ActionIcon>
  );
};

export default DarkNightMode;
