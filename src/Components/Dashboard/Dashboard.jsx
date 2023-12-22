import { NavLink, Outlet } from "react-router-dom";
import Navbar from './../Home/Navbar/Navbar';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="bg-white">
            <Navbar></Navbar>
            <div className="text-black font-Poppins flex md:mt-10 max-w-3xl lg:max-w-screen-xl">
                <div className="w-40 md:w-64 max-h-full bg-gray-200">
                    <ul className="menu md:p-6  md:text-xl">
                        {
                            user ? <>
                                <li className="md:mb-4"><NavLink to='/dashboard/profile'>My Profile</NavLink></li>
                                <li><NavLink to='/dashboard/createTask'>Create Task</NavLink></li>
                                <li><NavLink to='/dashboard/taskManagement'>Task management</NavLink></li>
                                <li><NavLink to='/dashboard/previous'>Previous task</NavLink></li>

                                <div className="divider"></div>
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/myTask'>All Task</NavLink></li>
                            </> : <></>
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