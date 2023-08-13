import { createBrowserRouter } from "react-router-dom";
import Home  from "../pages/Home";
import Main from "../layouts/Main";
import Cities from "../pages/Cities";
const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/cities",
                element: <Cities />
            }
        ]

    }
]);

export default Router;
