import {
  AppShellHeader,
  AppShellNavbar,
  Burger,
  Group,
  UnstyledButton,
} from "@mantine/core";
import React, { useMemo } from "react";
import DarkNightMode from "../DarkNightMode/DarkNightMode";
import { Link } from "react-router-dom";
import { IconCode } from "@tabler/icons-react";
import ScaleRotate from "../Animations/ScaleRotate";
import headerStyle from "./header.module.css";

const Header = ({ opened, toggle }) => {
  const HeaderLink = useMemo(() => {
    return [
      { label: "Home", href: "/" },
      { label: "Education & Certification", href: "/education" },
      { label: "Experience", href: "/experience" },
      { label: "Project", href: "/project" },
      { label: "Contact", href: "/contact" },
    ].map((head) => (
      <React.Fragment key={head.label}>
        <UnstyledButton>
          <Link to={head.href} className={headerStyle.unstyled_link}>
            {head.label}
          </Link>
        </UnstyledButton>
      </React.Fragment>
    ));
  }, []);
  return (
    <>
      <AppShellHeader withBorder={true}>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <ScaleRotate IconCode={IconCode} />
            <Group ml="xl" gap="xl" visibleFrom="sm">
              {HeaderLink}
            </Group>
          </Group>
          <DarkNightMode />
        </Group>
      </AppShellHeader>
      <AppShellNavbar py="md" px={10} style={{ gap: 10 }} hiddenFrom="sm">
        {HeaderLink}
      </AppShellNavbar>
    </>
  );
};

export default Header;
