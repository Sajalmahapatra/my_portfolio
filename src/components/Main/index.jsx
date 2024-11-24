import { AppShell, Container } from "@mantine/core";
import React from "react";
import mainStyle from "./main.module.css";

const Main = ({ children }) => {
  return (
    <AppShell.Main className={mainStyle["main_layout"]}>
      <Container
        fluid
        px={0}
        size="responsive"
        className={mainStyle["main_container_width"]}
      >
        {children}
      </Container>
    </AppShell.Main>
  );
};

export default Main;
