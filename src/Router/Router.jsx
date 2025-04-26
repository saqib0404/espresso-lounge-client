import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "any",
                element: <Home />
            }
        ]
    },
]);

export default router;