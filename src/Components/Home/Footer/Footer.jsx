/* eslint-disable react/jsx-no-target-blank */
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-black text-white">
            <aside>
                <h1 className="text-5xl font-bold font-righteous">#Tasker</h1>
                <p className="font-bold">
                    Tasker Industries Ltd. <br />Providing reliable tech since 2012
                </p>
                <p>Copyright © 2024 - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a className="text-2xl" target="_blank" href="https://www.facebook.com/profile.php?id=100089884363943">
                        <FaSquareFacebook ></FaSquareFacebook></a>
                    <a className="text-2xl" target="_blank" href="https://www.instagram.com/mdabdurrazzakk009911/"><FaInstagram ></FaInstagram></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;