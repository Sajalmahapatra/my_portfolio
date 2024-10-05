import { AppShell } from "@mantine/core";
import React, { Suspense } from "react";
import Main from "../components/Main";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useDisclosure } from "@mantine/hooks";
import FadeIn from "../components/Animations/FadeIn";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      styles={(theme) => ({
        footer: {
          paddingTop: 20,
        },
        // main: {
        //   display: "flex",
        //   flexDirection: "column",
        //   flexGrow: 1, // Ensure Main can grow
        //   // overflow: "hidden", // Prevent overflow in the parent
        // },
      })}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <FadeIn>
        <Header opened={opened} toggle={toggle} />
        <Main>
          <Suspense fallback={"loading..."}>
            <Outlet />
          </Suspense>
        </Main>
        <Footer />
      </FadeIn>
    </AppShell>
  );
};

export default Layout;
