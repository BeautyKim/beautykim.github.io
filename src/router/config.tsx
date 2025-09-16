import type { RouteObject } from "react-router-dom";
import Home from "../pages/home/page.tsx";
import NotFound from "../pages/NotFound.tsx";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];

export default routes;
