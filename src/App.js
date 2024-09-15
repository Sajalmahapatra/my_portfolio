import React from "react";
import { Button, Group, useMantineTheme } from "@mantine/core";
import Layout from "./Layout";

function App() {
  const theme = useMantineTheme();
  console.log("🚀 ~ App ~ theme:", theme);
  return (
    <Layout>
      This is main text
    </Layout>
  );
}

export default App;
