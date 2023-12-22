import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="bg-white md:max-h-screen">
            <div className="text-black font-Poppins flex  max-w-3xl lg:max-w-screen-xl">
                <div className="w-40 md:w-64 max-h-full bg-gray-200">
                    <ul className="menu md:p-6  md:text-xl">
                        {
                            user && <>
                                <li className="md:mb-4"><NavLink to='/dashboard/profile'>My Profile</NavLink></li>
                                <li><NavLink to='/dashboard/createTask'>Create Task</NavLink></li>
                                <li><NavLink to='/dashboard/taskManagement'>Task management</NavLink></li>
                                <li><NavLink to='/dashboard/previous'>Previous task</NavLink></li>
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