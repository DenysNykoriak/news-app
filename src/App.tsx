import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";

const AppRoutes = () => {
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
          element: <ProfilePage />,
        },
        {
          path: "/*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
