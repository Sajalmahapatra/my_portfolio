import React from "react";
import classes from "./NotFoundImage.module.css";
import { Container, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import Icon404 from "../../components/Icons/Icon404";

const Page404 = () => {
  return (
      <Container className={classes.root} fluid>
        <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
          <div className={classes.mobileImage}>
            <Icon404 />
          </div>
          <Stack justify="center">
            <Title className={classes.title}>Something is not right...</Title>
            <Text c="dimmed" size="lg">
              Page you are trying to open does not exist. You may have mistyped
              the address, or the page has been moved to another URL. If you
              think this is an error contact support.
            </Text>
          </Stack>
          <div className={classes.desktopImage}>
            <Icon404 />
          </div>
        </SimpleGrid>
      </Container>
  );
};

export default Page404;
