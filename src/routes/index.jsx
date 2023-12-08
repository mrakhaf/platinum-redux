import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Menus from "../pages/Menus";
import CreateMenu from "../pages/CreateMenu";
import Login from "../pages/Login";

function Routes(){
    const routers = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/menus",
            element: <Menus/>,
        },
        {
            path: "/create-menu",
            element: <CreateMenu/>,
        },
        {
            path: "/login",
            element: <Login/>,
        },
        
    ])

    return (
        <RouterProvider router={routers} />
    )
}

export default Routes