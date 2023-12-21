import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire("Logout successfully");
            })
            .catch(error => console.log(error))
    }
    const navbar = (
        <>
            <ul className="md:flex bg-white text-black mx-auto">
                <li className="nav-item my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                    <Link to='/' className="nav-link">Home</Link>
                </li>

                <li className="nav-item">
                    {/* <button className="nav-link">My Task</button> */}
                    <Link className="nav-link" to='/myTask'>My Task</Link>
                </li>
                <li className="nav-item">
                    <button className="nav-link">Complete Task</button>
                </li>
                <div className="dropdown  md:dropdown-bottom lg:dropdown-end">
                    <div tabIndex={0} role="button" className=" btn-circle avatar">
                        <div className="w-10 h-10 rounded-full">
                            {user ? <>
                                <img src={user?.photoURL} alt="User profile" />
                            </> :
                                <>
                                </>}
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52">
                        {
                            user ? <>
                                <button>
                                    <Link to='/dashboard' className="nav-link">Dashboard
                                    </Link>
                                </button>
                                <button onClick={handleLogout}>
                                    <Link to='/' className="nav-link">Logout
                                    </Link>
                                </button>
                            </> :
                                <>

                                </>
                        }
                    </ul>
                </div>
            </ul>
        </>
    );
    return (
        <nav className="relative bg-white shadow text-black font-montserrat font-bold">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="md:flex items-center justify-between">
                    <Link to='/'>
                        <h1 className="font-bold text-4xl font-montserrat">#rzak</h1>
                    </Link>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-black text-white ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full '
                        } md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
                >
                    {navbar}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;