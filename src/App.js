import React from "react";
import {
  Button,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";

function App() {
  const { setColorScheme, toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const computedColorScheme = useComputedColorScheme("light");


  const theme = useMantineTheme();
  console.log("🚀 ~ App ~ theme:", theme);
  return (
    <Group position="center" mt="xl">
      <Button onClick={toggleColorScheme}>
        Switch to {computedColorScheme === "dark" ? "Light" : "Dark"} Mode
      </Button>
    </Group>
  );
}

export default App;
