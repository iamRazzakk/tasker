import { Link, NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire("Logout successfully");
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="bg-white md:max-h-screen">
            <Helmet>
                <title>Tasker | Dashboard</title>
            </Helmet>
            <div className="text-black font-Poppins flex  max-w-3xl lg:max-w-screen-xl">
                <div className="w-40 md:w-64 max-h-full bg-gray-200">
                    <ul className="menu md:p-6  md:text-xl">
                        {
                            user && <>
                                <li className="md:mb-4"><NavLink to='/dashboard/profile'>My Profile</NavLink></li>
                                <li><NavLink to='/dashboard/createTask'>Create Task</NavLink></li>
                                <li><NavLink to='/dashboard/taskManagement'>Task management</NavLink></li>
                                <li><NavLink to='/dashboard/previous'>Previous task</NavLink></li>
                                <li className="font-bold text-xl"><button onClick={handleLogout}>
                                    <Link to='/' className="nav-link">Logout
                                    </Link>
                                </button></li>
                            </>
                        }
                    </ul>

                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>

        </div >
    );
};

export default Dashboard;