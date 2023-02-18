import React from "react";
import { CssBaseline, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const Layout = () => {
  return (
    <Stack>
      <NavBar
        links={[
          { reactKey: "home", title: "Home", to: "/" },
          { reactKey: "news", title: "News", to: "/news" },
          { reactKey: "profile", title: "Profile", to: "/profile" },
        ]}
      />
      <Outlet />
      <CssBaseline />
    </Stack>
  );
};

export default Layout;
