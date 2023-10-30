import { RouteObject } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { TimelinePage } from "../pages/Timeline";
import Route from "./components/Route";

export const router: RouteObject[] = [
  {
    path: "/",
    element: (
      <Route layout="default">
        <HomePage />
      </Route>
    ),
  },
  {
    path: "/timeline",
    element: (
      <Route layout="timeline">
        <TimelinePage />
      </Route>
    ),
  },
];
