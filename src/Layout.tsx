import React from "react";
import { CssBaseline, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ContentContainer from "./components/layout/ContentContainer";
import Footer from "./components/layout/Footer";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const [t] = useTranslation();

  return (
    <Stack
      sx={{
        width: "100%",
        minHeight: "100vh",
        justifyContent: "space-between",
        alignItems: "center",
        overflowX: "clip",
      }}
    >
      <Navbar
        links={[
          { reactKey: "home", title: t("Navbar:links./", "Home"), to: "/" },
          {
            reactKey: "news",
            title: t("Navbar:links./news", "News"),
            to: "/news",
          },
          {
            reactKey: "profile",
            title: t("Navbar:links./profile", "Profile"),
            to: "/profile",
            needAuth: true,
          },
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
