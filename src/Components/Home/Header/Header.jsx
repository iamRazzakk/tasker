
import headerImg from '../../../assets/photo.jpeg'
const Header = () => {
    return (
        <div>
        <div className='relative'>
            <img className='w-full h-[85vh] object-cover' src={headerImg} alt="" />
            
        </div>
        <h1 className='absolute -mt-20'>Hello world</h1>
        </div>
    );
};

export default Header;