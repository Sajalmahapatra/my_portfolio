import {
  AppShellHeader,
  AppShellNavbar,
  Burger,
  Group,
  UnstyledButton,
} from "@mantine/core";
import React, { useMemo } from "react";
import DarkNightMode from "../DarkNightMode/DarkNightMode";

const Header = ({ opened, toggle }) => {
  const HeaderLink = useMemo(() => {
    return [
      { label: "Home" },
      { label: "Education & Certification" },
      { label: "Experience" },
      { label: "Project" },
      { label: "Contact" },
    ].map((head) => (
      <React.Fragment key={head.label}>
        <UnstyledButton>{head.label}</UnstyledButton>
      </React.Fragment>
    ));
  }, []);

  return (
    <>
      <AppShellHeader>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="end" style={{ flex: 1 }}>
            {/* <MantineLogo size={30} /> */}
            <Group ml="xl" gap={10} visibleFrom="sm">
              {HeaderLink}
            </Group>
          </Group>
          <DarkNightMode />
        </Group>
      </AppShellHeader>
      <AppShellNavbar py="md" px={4}>
        {HeaderLink}
      </AppShellNavbar>
    </>
  );
};

export default Header;
