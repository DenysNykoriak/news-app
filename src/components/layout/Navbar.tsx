import React from "react";
import { Stack, StackProps, Link as MuiLink } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useAppColors } from "../../logic/theme";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { useAuth } from "../../hooks/useAuth";
import NavbarIconButton from "./navbar/NavbarIconButton";
import Logo from "./navbar/Logo";

export type NavbarProps = {
  links: {
    reactKey: string;
    title: string;
    to: string;
  }[];
} & StackProps<"nav">;

const Navbar = ({ links, ...props }: NavbarProps) => {
  const [{ palette }] = useAppColors();
  const { isAuthorized } = useAuth();

  const location = useLocation();

  return (
    <Stack
      component="nav"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: "100%",
        bgcolor: palette.grey[500],
        p: 3,
        pb: 7,
        mb: -4,
        zIndex: 0,
      }}
      {...props}
    >
      <Logo />
      <Stack direction={"row"} gap={2}>
        {/* Icon Buttons */}
        <Stack
          direction={"row"}
          sx={{
            gap: 2,
          }}
        >
          <NavbarIconButton title="Notification">
            <NotificationsOutlinedIcon
              sx={{
                color: palette.white[200],
              }}
            />
          </NavbarIconButton>
          <NavbarIconButton title={isAuthorized ? "Log out" : "Log in"}>
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
          </NavbarIconButton>
        </Stack>

        {/* Links */}
        <Stack direction={"row"} gap={1}>
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
                borderRadius: "10px",
                backgroundColor:
                  location.pathname === link.to
                    ? palette.green[500]
                    : undefined,
              }}
            >
              {link.title}
            </MuiLink>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navbar;
