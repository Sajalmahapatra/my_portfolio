import React from "react";
import { useMantineTheme } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Page404 from "./pages/Page404";
import routes from "./Routes";

function App() {
  const theme = useMantineTheme();
  console.log("🚀 ~ App ~ theme:", theme);
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />,
      children: routes,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
