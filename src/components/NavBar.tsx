import React from "react";
import {
  Stack,
  StackProps,
  Box,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";

export type NavBarProps = {
  links: {
    reactKey: string;
    title: string;
    to: string;
  }[];
} & StackProps;

const NavBar = ({ links, ...props }: NavBarProps) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: "100%",
        py: 1,
        px: 2,
      }}
      {...props}
    >
      <Box>
        <Typography
          variant="h4"
          component="h1"
          color="primary"
          sx={{
            fontFamily: "Fira Sans, sans-serif",
            fontWeight: 500,
          }}
        >
          News App
        </Typography>
      </Box>
      <Stack direction={"row"} gap={2}>
        {links.map((link) => (
          <Link key={link.reactKey} to={link.to} role={"link"}>
            <MuiLink component={"span"}>{link.title}</MuiLink>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default NavBar;
