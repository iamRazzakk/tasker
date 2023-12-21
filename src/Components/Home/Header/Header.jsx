/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom';
import headerImg from '../../../assets/photo.jpeg'
import '../../Button.css'
const Header = () => {
    return (
        <div className='font-righteous'>
            <div className=' '>
                <img className='w-full relative h-[85vh] object-cover' src={headerImg} alt="" />
            </div>
            <div className='absolute -mb-16 space-y-4 w-3/5 text-white items-center p-10 h-[85vh] mt-[75px] pt-40  left-0 top-0 bg-gradient-to-r from-[#7f7d7d] to-[rgba(21,21,21,0)]'>
                <h1 className=' font-bold text-5xl pl-20 w-full '>Tasker: <span className='text-4xl'>Master Your Day</span></h1>
                <p className='pl-20 text-black text-xl'>Empowering you to master your day with seamless <br /> task management</p>
                <Link to='login'>
                    <button className='bg-black mt-4 ml-20 btn'>Let's Explore</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;