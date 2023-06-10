import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructor from "../pages/Instructor/Instructor";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,        
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/instructors",
                element: <Instructor></Instructor>
            },
            {
                path: "/classes",
                element: <Classes></Classes>
            }            
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "manageusers",
                element: <ManageUsers></ManageUsers>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

export default router;