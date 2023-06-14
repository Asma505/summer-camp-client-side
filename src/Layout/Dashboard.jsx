import { Link, Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import { FaChalkboardTeacher, FaCheckCircle, FaFolderPlus, FaForward, FaGraduationCap, FaHistory, FaList, FaSitemap, FaUserShield, FaUsers } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {

    // const isAdmin = true;

    // const isInstructor = false;

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


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
                    <ul className="menu p-4 w-80 h-full bg-slate-200 text-base-content text-xl">

                        {
                            isAdmin ? <>
                                <li><Link><FaUserShield></FaUserShield> Admin Dashboard:</Link></li>
                                <li><Link to="/dashboard/manageclasses"><FaList></FaList> Manage Classes</Link></li>
                                <li><Link to="/dashboard/manageusers"><FaUsers></FaUsers> Manage Users</Link></li>
                            </> :
                                isInstructor ? <><li><Link><FaChalkboardTeacher></FaChalkboardTeacher> Instructor Dashboard:</Link></li>
                                    <li><Link to="/dashboard/myclasses"><FaSitemap></FaSitemap> My Classes</Link></li>
                                    <li><Link to="/dashboard/addaclass"><FaFolderPlus></FaFolderPlus> Add a Class</Link></li>
                                </> :
                                    <><li><Link><FaGraduationCap></FaGraduationCap> Student Dashboard:</Link></li>
                                        <li><Link to="/dashboard/selectedclass"><FaCheckCircle></FaCheckCircle> My Selected Classes</Link></li>
                                        <li><Link to="/dashboard/enrolledclass"><FaForward></FaForward> My Enrolled Classes</Link></li>
                                        <li><Link to="/dashboard/paymenthistory"><FaHistory></FaHistory> Payment History</Link></li>
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