import { ThemeProvider } from "@mui/material";
import React from "react";
import {
  HashRouter,
  useRoutes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import { useAuth, useInitAuth } from "./hooks/useAuth";
import Layout from "./Layout";
import { useInitAppTheme } from "./logic/theme";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import ProfilePage from "./pages/ProfilePage";

const AppRoutes = () => {
  const { isAuthorized, checkingAuth } = useAuth();

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
          element: checkingAuth ? (
            <div>Loading...</div>
          ) : isAuthorized ? (
            <ProfilePage />
          ) : (
            <Navigate to="/" />
          ),
        },
        {
          path: "/*",
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);
};

const isProduction = process.env.NODE_ENV === "production";
const AppRouter = isProduction ? HashRouter : BrowserRouter;

function App() {
  useInitAuth();

  const [theme] = useInitAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppRouter>
        <AppRoutes />
      </AppRouter>
    </ThemeProvider>
  );
}

export default App;
