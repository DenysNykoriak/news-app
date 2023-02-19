import React from "react";
import { CssBaseline, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import ContentContainer from "./components/layout/ContentContainer";
import Footer from "./components/layout/Footer";

const Layout = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        minHeight: "100vh",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
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
      <Footer />

      <CssBaseline />
    </Stack>
  );
};

export default Layout;
