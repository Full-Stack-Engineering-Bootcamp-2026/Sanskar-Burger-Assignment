import logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import SearchBar from './SearchBar';
// import {setName} from '../redux/slices/productSlice'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setName } from '../redux/slices/productSlice';
const Navbar = () => {
    const [localName,setLocalName] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (value)=>{
        setLocalName(value);
        // dispatch(setName(value))
    }
    const handleClick = ()=>{
        dispatch(setName(localName));
    }
    return (
        <div className='h-[8vh] flex justify-between  items-center bg-[#0e0d0d] border-b shadow-sm text-gray-600'>
            <div className='flex items-center'>
                <img onClick={() => navigate('/')} className=' h-[8vh]' src={logo} alt="" ></img>
                <h1 className='font-sans text-[24px] text-[#fc6537] font-extrabold'>BurgerByte</h1>
            </div>
            <div className='flex items-center'>
                <SearchBar onChange={handleChange}/>
                    <Button onClick={handleClick}>
                        Search
                    </Button>
                    <Button onClick={()=>navigate("/order")}>
                        Order History
                    </Button>
            </div>
            <div className='flex justify-start items-center mr-2 cursor-pointer'>
                <h1 className='text-4xl' onClick={() => navigate("/cart")}>🛒</h1>
                {/* <img className='h-[5vh] mr-2' src={cartIcon} alt="" /> */}
            </div>
        </div >
    )
}

export default Navbar