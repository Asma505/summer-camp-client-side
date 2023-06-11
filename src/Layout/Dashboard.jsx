import { Link, Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";


const Dashboard = () => {

    const isAdmin = true;

    const isInstructor = false;


    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-slate-200 text-base-content">

                        {
                            isAdmin ? <>
                                <li><Link>Admin Dashboard:</Link></li>
                                <li><Link>Manage Classes</Link></li>
                                <li><Link to="/dashboard/manageusers">Manage Users</Link></li>
                            </> : 
                            isInstructor ? <><li><Link>Instructor Dashboard:</Link></li>
                                <li><Link>Add a Class</Link></li>
                                <li><Link>My Classes</Link></li>
                            </> :
                                <><li><Link>Student Dashboard:</Link></li>
                                    <li><Link>My Selected Classes</Link></li>
                                    <li><Link>My Enrolled Classes</Link></li>
                                </>
                        }






                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;