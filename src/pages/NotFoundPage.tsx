import React from "react";
import { Stack, StackProps, Typography } from "@mui/material";

type Props = StackProps;

const NotFoundPage = (props: Props) => {
  return (
    <Stack alignItems="center" justifyContent="center" {...props}>
      <Typography variant="h2">Not Found Page</Typography>
    </Stack>
  );
};

export default NotFoundPage;
