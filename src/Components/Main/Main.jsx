import { Outlet } from "react-router-dom";
import Navbar from './../Home/Navbar/Navbar';
import Footer from "../Home/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className="md:mt-10">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;