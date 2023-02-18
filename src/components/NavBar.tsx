import React from "react";
import {
  Stack,
  StackProps,
  Box,
  Typography,
  Link as MuiLink,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useAppColors } from "../logic/theme";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useAuth } from "../hooks/useAuth";

export type NavBarProps = {
  links: {
    reactKey: string;
    title: string;
    to: string;
  }[];
} & StackProps;

const NavBar = ({ links, ...props }: NavBarProps) => {
  const [{ palette }] = useAppColors();
  const { isAuthorized, toggleAuth } = useAuth();

  const location = useLocation();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: "100%",
        bgcolor: palette.grey[500],
        p: 3,
        pb: 7,
        mb: -4,
      }}
      {...props}
    >
      <Box>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            color: palette.white[200],
            fontFamily: "Fira Sans, sans-serif",
            fontWeight: 500,
          }}
        >
          News App
        </Typography>
      </Box>
      <Stack direction={"row"} gap={2}>
        <Tooltip title={isAuthorized ? "Log out" : "Log in"}>
          <IconButton
            onClick={toggleAuth}
            sx={{
              border: `2px solid ${palette.grey[300]}`,
              borderRadius: "10px",
            }}
          >
            {isAuthorized ? (
              <LogoutOutlinedIcon
                sx={{
                  color: palette.white[200],
                }}
              />
            ) : (
              <LoginOutlinedIcon
                sx={{
                  color: palette.white[200],
                }}
              />
            )}
          </IconButton>
        </Tooltip>

        {links.map((link) => (
          <MuiLink
            key={link.reactKey}
            component={Link}
            to={link.to}
            underline="none"
            sx={{
              color: palette.white[200],
              py: 1,
              px: 2,
              border: `2px solid ${palette.green[500]}`,
              borderRadius: "10px",
              backgroundColor:
                location.pathname === link.to ? palette.green[500] : undefined,
            }}
          >
            {link.title}
          </MuiLink>
        ))}
      </Stack>
    </Stack>
  );
};

export default NavBar;
