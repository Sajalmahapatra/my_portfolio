import React, { lazy } from "react";
const Home = lazy(() => import("../pages/home/index"));
const Education = lazy(() => import("../pages/education/index"));
const Experience = lazy(() => import("../pages/experience/index"));
const Project = lazy(() => import("../pages/project/index"));
const Contact = lazy(() => import("../pages/contact/index"));

const routes = [
  { element: <Home />, path: "/" },
  { element: <Education />, path: "/education" },
  { element: <Experience />, path: "/experience" },
  { element: <Project />, path: "/project" },
  { element: <Contact />, path: "/contact" },
];
export default routes;
