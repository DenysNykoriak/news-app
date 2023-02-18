import React from "react";
import { CssBaseline, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import ContentContainer from "./components/ContentContainer";

const Layout = () => {
  return (
    <Stack
      sx={{
        width: "100vw",
        minHeight: "100vh",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <NavBar
        links={[
          { reactKey: "home", title: "Home", to: "/" },
          { reactKey: "news", title: "News", to: "/news" },
          { reactKey: "profile", title: "Profile", to: "/profile" },
        ]}
      />
      <ContentContainer>
        <Outlet />
      </ContentContainer>

      <CssBaseline />
    </Stack>
  );
};

export default Layout;
