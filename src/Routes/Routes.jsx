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
import PrivateRoute from "./PrivateRoute";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import Feedback from "../pages/Dashboard/Feedback/Feedback";
import AdminRoute from "./AdminRoute";
import SelectedClasses from "../pages/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../pages/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import Payment from "../pages/Payment/Payment";
import MyClasses from "../pages/MyClasses/MyClasses";
import InstructorRoute from "./InstructorRoute";
import AddAClass from "../pages/AddAClass/AddAClass";
import Update from "../pages/Update/Update";



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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "manageusers",
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: "manageclasses",
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: "feedback/:id",
                element: <AdminRoute><Feedback></Feedback></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
            },
            {
                path: "selectedclass",
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: "enrolledclass",
                element: <EnrolledClasses></EnrolledClasses>
            },
            {
                path: "paymenthistory",
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "payment/:id",
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)                
            },
            {
                path: "myclasses",
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            {
                path: "addaclass",
                element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
            },
            {
                path: "update/:id",
                element: <InstructorRoute><Update></Update></InstructorRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/mycourse/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

export default router;