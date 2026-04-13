// import React, { useEffect, useState } from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Cart = () => {

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const navigate = useNavigate();
    const [form, setForm] = useState(false);
    const [user, setUser] = useState({ name: "", email: "" });
    const [optimized, setOptimized] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            if (cart.length > 0) {
                const response = await axios.post("http://localhost:3000/order/", {
                    items: cart,
                    calculateOptimizedTotal: true
                })
                setOptimized(response.data.optimisedTotal);
            }
        }
        fetchData();

    }, [JSON.stringify(cart)]);
    const total = cart.reduce((curr, item) => {
        return curr + item.price * item.quantity;
    }, 0)
    if (cart.length === 0) {
        return (
            <div className='min-h-screen bg-[#1F1F1F] flex items-center justify-center text-white font-extrabold text-4xl text-center px-4'>
                You must be hungry!!!!! Eat something!!
            </div>
        )
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const handleCheckout = async () => {
        setForm(true);
    }

    const handlePlaceOrderClick = async()=>{
        try{
            const response =await axios.post("http://localhost:3000/order/",{
                user:{name:user.name || "Spiderman",email:user.email||"spiderman@test.com"},
                items:cart
            });
            setOptimized(response.data.optimisedTotal);
            toast.success("Order Placed!!",2000);
            localStorage.removeItem('cart');
            navigate("/order");
        }
        catch(err){
            toast.error("Something Went Wrong!");
            console.log(err);
        }
    }

    return (
        <div className='min-h-screen bg-[#1F1F1F] flex justify-center pt-10'>
            <div className='w-150 bg-[#2A2A2A] p-6 rounded-2xl shadow-xl'>

                <h1 className='text-2xl font-bold text-white mb-4'>Order Details</h1>

                <div className='grid grid-cols-4 text-gray-400 border-b border-gray-600 pb-2 mb-2'>
                    <span>Item</span>
                    <span className='text-center'>Price</span>
                    <span className='text-center'>Qty</span>
                    <span className='text-right'>Total</span>
                </div>

                {cart.map((item, index) => (
                    <div
                        key={index}
                        className='grid grid-cols-4 items-center border-b border-gray-700 py-3 hover:bg-[#333] px-2 rounded-lg transition'
                    >
                        <span className='text-white font-medium'>{item.name}</span>

                        <span className='text-gray-300 text-center'>
                            ₹{item.price}
                        </span>

                        <span className='text-gray-300 text-center'>
                            x{item.quantity}
                        </span>

                        <span className='text-orange-400 text-right font-bold'>
                            ₹{item.price * item.quantity}
                        </span>
                    </div>
                ))}
                <div className='flex justify-between mt-6 text-xl font-bold text-white'>
                    <span>Total</span>
                    <span className='text-orange-400'>₹{total}</span>
                </div>
                <div className='flex justify-between mt-6 text-xl font-bold text-white'>
                    <span>Optimised Total</span>
                    <span className='text-orange-400'>₹{optimized}</span>
                </div>
                {form && (
                    <div className="mt-6 border-t border-gray-600 pt-4">

                        <h2 className="text-white text-lg font-bold mb-3">
                            Enter Details
                        </h2>

                        <input
                            name="name"
                            placeholder="Enter Name"
                            className="w-full mb-3 p-2 rounded bg-[#1f1f1f] text-white outline-none"
                            onChange={handleChange}
                            required
                        />

                        <input
                        required
                            type='email'
                            name="email"
                            placeholder="Enter Email"
                            className="w-full mb-3 p-2 rounded bg-[#1f1f1f] text-white outline-none"
                            onChange={handleChange}
                        />
                    </div>
                )}
                {form ? (
                    <button
                        className='w-full mt-6 bg-orange-500 hover:bg-orange-800 text-white font-bold py-3 rounded-xl transition'
                        onClick={handlePlaceOrderClick}
                    >
                        Confirm Order
                    </button>
                ) : (
                    <button
                        className='w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition'
                        onClick={handleCheckout}
                    >
                        Checkout
                    </button>
                )}

            </div>
        </div>
    )
}

export default Cart