import type { RouteObject } from "react-router";
import { Home, Login } from "@/pages";

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
