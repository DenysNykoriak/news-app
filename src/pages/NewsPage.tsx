import React from "react";
import { Stack, StackProps, Typography } from "@mui/material";

type Props = StackProps;

const NewsPage = (props: Props) => {
  return (
    <Stack alignItems="center" justifyContent="center" {...props}>
      <Typography variant="h2">News Page</Typography>
    </Stack>
  );
};

export default NewsPage;
