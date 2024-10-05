import { Skeleton } from "@mantine/core";
import React from "react";

const Contact = () => {
  return <div>      {Array(50)
    .fill(0)
    .map((_, index) => (
      <Skeleton key={index} h={28} mt="sm" animate={false} children={<>{index}</>}/>
    ))}</div>;
};

export default Contact;
