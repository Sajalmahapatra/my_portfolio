import { AppShell } from "@mantine/core";
import React from "react";
import Main from "../components/Main";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useDisclosure } from "@mantine/hooks";
import FadeIn from "../components/Animations/FadeIn";

const Layout = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <FadeIn>
        <Header opened={opened} toggle={toggle} />
        <Main>{children}</Main>
        <Footer />
      </FadeIn>
    </AppShell>
  );
};

export default Layout;
