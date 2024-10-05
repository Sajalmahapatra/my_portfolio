import { AppShellFooter, Group } from "@mantine/core";
import React from "react";
import { greeting } from "../../portfolio";

const Footer = () => {
  return (
    <AppShellFooter>
      <Group justify="center">
        Made with<span role="img">❤️</span>by {greeting.title2}
      </Group>
    </AppShellFooter>
  );
};

export default Footer;
