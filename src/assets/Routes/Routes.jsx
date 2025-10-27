import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import AppsDetails from "../Pages/AppsDetails/AppsDetails";
import Installation from "../Pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/BooksData.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/MoreAppsData.json"),
        Component: Apps,
      },
      {
        path: "/appsdetails/:id",
        loader: async () => {
          const res = await fetch("/MoreAppsData.json");
          return res.json();
        },
        element: <AppsDetails />,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);
