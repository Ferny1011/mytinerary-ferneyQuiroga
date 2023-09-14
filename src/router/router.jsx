import { createBrowserRouter } from "react-router-dom";
import Home  from "../pages/Home";
import Main from "../layouts/Main";
import Cities from "../pages/Cities";
import CityDetails from "../pages/CityDetails";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
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
            },
            {
                path: "/cities/:id",
                element: <CityDetails />
            },
            {
                path: "/signin",
                element: <SignIn />
            },
            {
                path: "/signup",
                element: <SignUp />
            }
        ]

    }
]);

export default Router;
