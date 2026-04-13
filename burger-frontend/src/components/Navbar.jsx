import logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
const Navbar = ({ setSearch }) => {
    const navigate = useNavigate();
    return (
        <div className='h-[8vh] flex justify-between  items-center bg-[#0e0d0d] border-b shadow-sm text-gray-600'>
            <div className='flex items-center'>
                <img onClick={() => navigate('/')} className=' h-[8vh]' src={logo} alt="" ></img>
                <h1 className='font-sans text-[24px] text-[#fc6537] font-extrabold'>BurgerByte</h1>
            </div>
            <div className='flex items-center'>
                <SearchBar onChange={setSearch} />
                <button className="bg-[#1f1f1f] hover:bg-[#f31c0d] transition duration-200 text-white font-bold py-2 px-4 rounded-full mx-1" onClick={() => navigate("/order")}>
                    Order History
                </button>
            </div>
            <div className='flex justify-start items-center mr-2 cursor-pointer'>
                <h1 className='text-4xl' onClick={() => navigate("/cart")}>🛒</h1>
                {/* <img className='h-[5vh] mr-2' src={cartIcon} alt="" /> */}
            </div>
        </div >
    )
}

export default Navbar