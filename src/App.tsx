import { ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, useRoutes, Navigate } from "react-router-dom";
import { useAuth, useInitAuth } from "./hooks/useAuth";
import Layout from "./Layout";
import { useInitAppTheme } from "./logic/theme";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import ProfilePage from "./pages/ProfilePage";

const AppRoutes = () => {
  const { isAuthorized } = useAuth();

  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/news",
          element: <NewsPage />,
        },
        {
          path: "/profile",
          element: isAuthorized ? <ProfilePage /> : <Navigate to="/" />,
        },
        {
          path: "/*",
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);
};

function App() {
  useInitAuth();

  const [theme] = useInitAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
