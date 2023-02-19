import React, { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
  IconButton,
  IconButtonProps,
  Drawer,
  Typography,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import { useAppColors } from "../../../logic/theme";
import { NavbarProps } from "../Navbar";
import { Link, useLocation } from "react-router-dom";

type Props = {
  links: NavbarProps["links"];
} & IconButtonProps;

const NavbarBurger = ({ links, ...props }: Props) => {
  const [{ palette }] = useAppColors();
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <IconButton onClick={toggleDrawer} size="small" {...props}>
        <MenuOutlinedIcon
          fontSize="large"
          sx={{
            color: palette.white[100],
          }}
        />
      </IconButton>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={closeDrawer}
        PaperProps={{
          sx: {
            p: 2,
            bgcolor: palette.grey[500],
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            color: palette.white[100],
          }}
        >
          News App Menu
        </Typography>
        <Stack gap={1}>
          {links.map((link) => (
            <MuiLink
              key={link.reactKey}
              component={Link}
              to={link.to}
              onClick={closeDrawer}
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
      </Drawer>
    </>
  );
};

export default NavbarBurger;
