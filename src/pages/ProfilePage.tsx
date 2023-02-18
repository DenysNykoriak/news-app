import React from "react";
import { Stack, StackProps, Typography } from "@mui/material";

type Props = StackProps;

const ProfilePage = (props: Props) => {
  return (
    <Stack alignItems={"center"} {...props}>
      <Typography variant="h2">Profile Page</Typography>
    </Stack>
  );
};

export default ProfilePage;
