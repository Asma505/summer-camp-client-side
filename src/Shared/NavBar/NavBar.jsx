import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css'
import { AuthContext } from "../../providers/AuthProvider";


const NavBar = () => {
    const {user} = useContext(AuthContext);
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const menues = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}        
    </>
    return (
        <div>
            <div id="navbarbg" className='bg-sky-100'>
                <div className="navbar md:w-11/12 md:mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 w-52">
                                <div id="mobile-menu">
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/instructors'>Instructors</Link></li>
                                    <li><Link to='/classes'>Classes</Link></li>
                                    {user && <li><Link to='/dashboard'>Dashboard</Link></li>}          
                                </div>
                            </ul>
                        </div>
                        <p className="normal-case text-xl font-bold">Learn Language</p>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex gap-5 menu-horizontal px-1">
                            {menues}
                        </ul>
                    </div>

                    <div className="navbar-end">
                        {user ? <>
                            <div>
                            <img src={user.photoURL} alt="" />
                        </div>

                        <Link><button className="p-3">Logout</button></Link>
                        </>:
                        
                        <Link to='/login'><button className="p-3">Login</button></Link>}
                        
                        <div className={`Home ${theme}`}>
                            <button id="togglebg" className="md:pl-3 bg-sky-100" onClick={toggleTheme}>Dark/Light</button>
                        </div>                        
                    </div>
                </div>
            </div>
        </div >
    );
};

export default NavBar;