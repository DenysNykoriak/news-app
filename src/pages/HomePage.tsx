import React from "react";
import { Stack, StackProps, Typography } from "@mui/material";

type Props = StackProps;

const HomePage = (props: Props) => {
  return (
    <Stack alignItems="center" {...props}>
      <Typography variant="h2">Home Page</Typography>
    </Stack>
  );
};

export default HomePage;
