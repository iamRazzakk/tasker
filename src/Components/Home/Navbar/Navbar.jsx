import { useState } from "react";
import { Link } from "react-router-dom";
import  './Navbar.css'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navbar = (
        <>
            <ul className="md:flex bg-white text-black mx-auto">
                <li className="nav-item my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                    <Link to='/' spy={true}
                        smooth={true}
                        offset={50}
                        duration={500} className="nav-link">Home</Link>
                </li>

                <li className="nav-item">
                    <Link to='skill' spy={true}
                        smooth={true}
                        offset={50}
                        duration={500} className="nav-link">Skills</Link>
                </li>
                <li className="nav-item">
                    <Link to='projects' spy={true}
                        smooth={true}
                        offset={50}
                        duration={500} className="nav-link">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link to='about' spy={true}
                        smooth={true}
                        offset={50}
                        duration={500} className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to='contact' spy={true}
                        smooth={true}
                        offset={50}
                        duration={500} className="nav-link">Contact</Link>
                </li>
                {/* <li className="nav-item">
            <span className="nav-link">Blog</span>
          <Link to='blog' spy={true}
              smooth={true}
              offset={50}
              duration={500} className="nav-link">Blog</Link>
          </li> */}
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