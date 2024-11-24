import { AppShell, Container } from "@mantine/core";
import React from "react";
import mainStyle from "./main.module.css";
import { useSizeHook } from "../../Hooks/useSizeHook";

const Main = ({ children }) => {
  const { sm } = useSizeHook();

  return (
    <AppShell.Main className={mainStyle["main_layout"]}>
      <Container
        px={0}
        size={sm ? "xl" : ""}
        className={mainStyle["main_container_width"]}
      >
        {children}
      </Container>
    </AppShell.Main>
  );
};

export default Main;
