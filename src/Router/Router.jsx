import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "add-coffee",
                element: <AddCoffee />
            },
            {
                path: "update-coffee/:id",
                element: <UpdateCoffee />
            },
        ]
    },
]);

export default router;