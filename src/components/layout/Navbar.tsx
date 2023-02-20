import React from "react";
import { Stack, StackProps, Link as MuiLink } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppColors } from "../../logic/theme";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { useAuth } from "../../hooks/useAuth";
import NavbarIconButton from "./navbar/NavbarIconButton";
import Logo from "./navbar/Logo";
import ConfirmationDialog from "../dialogs/ConfirmationDialog";
import { useConfirmationDialog, useDialog } from "../../hooks/useDialog";
import LoginDialog from "../dialogs/LoginDialog";

export type NavbarProps = {
  links: {
    reactKey: string;
    title: string;
    to: string;
    needAuth?: boolean;
  }[];
} & StackProps<"nav">;

const Navbar = ({ links, ...props }: NavbarProps) => {
  const [{ palette }] = useAppColors();
  const { isAuthorized, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  //* Confirm Logout
  const {
    dialogOpen: confirmLogoutOpenState,
    handleDialogOpen: handleLogoutDialogOpen,
    handleDialogClose: handleLogoutDialogClose,
    handleDialogConsent: handleLogoutDialogConsent,
  } = useConfirmationDialog({
    handleConsent: () => {
      navigate("/");
      logout();
    },
  });

  //* Login
  const {
    dialogOpen: loginDialogOpen,
    handleDialogClose: handleLoginDialogClose,
    handleDialogOpen: handleLoginDialogOpen,
  } = useDialog({});

  return (
    <>
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
            <NavbarIconButton
              onClick={
                isAuthorized ? handleLogoutDialogOpen : handleLoginDialogOpen
              }
              title={isAuthorized ? "Log out" : "Log in"}
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
            </NavbarIconButton>
          </Stack>

          {/* Links */}
          <Stack direction={"row"} gap={1}>
            {links.map((link) => (
              <MuiLink
                key={link.reactKey}
                {...(!link.needAuth || isAuthorized
                  ? {
                      component: Link,
                      to: link.to,
                    }
                  : {
                      onClick: handleLoginDialogOpen,
                    })}
                underline="none"
                sx={{
                  cursor: "pointer",
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
      <LoginDialog
        open={loginDialogOpen}
        handleClose={handleLoginDialogClose}
      />
      <ConfirmationDialog
        subtitle="Are you sure want to log out?"
        open={confirmLogoutOpenState}
        handleClose={handleLogoutDialogClose}
        handleConsent={handleLogoutDialogConsent}
      />
    </>
  );
};

export default Navbar;
