// import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = () => {
    // const [optimised, setOptimised] = useState(0);
    // useEffect(() => {
    //     const fetchOptimisedTotal = async () => {
    //         let cart = JSON.parse(localStorage.getItem('cart') || []);
    //         const total = cart.reduce((currentTotal, item) => { return currentTotal + item.price * item.quantity }, 0)
    //         const response = await fetch("http://localhost:3000/order/checkout", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 calculate:true,
    //                 items: cart,
    //                 total,
    //             })
    //         });
    //         const data = await response.json();
    //         setOptimised(data.optimisedBill);
    //     }
    //     if(cart.length > 0)
    //         fetchOptimisedTotal();
    // }, [])
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((curr, item) => {
        return curr + item.price * item.quantity;
    }, 0)
    const navigate = useNavigate();
    if (cart.length === 0) {
        return (
            <div className='min-h-screen bg-[#1F1F1F] flex items-center justify-center text-gray-400 text-4xl text-center px-4'>
                You must be hungry!!!!! Eat something!!
            </div>
        )
    }
    const handlePlaceOrderClick = async()=>{
        await fetch("http://localhost:3000/order/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    calculate:false,
                    items: cart,
                    total,
                })
            });
            toast.success("Order Placed");
            localStorage.removeItem('cart');
            navigate('/');
    }

    return (
        <div className='min-h-screen bg-[#1F1F1F] flex justify-center pt-10'>
            <div className='w-150 bg-[#2a2a2a] p-6 rounded-2xl shadow-xl'>
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
                    <span>Total</span>
                    <span className='text-orange-400'>₹{total}</span>
                </div>
                <button
                    className='w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition'
                    onClick={handlePlaceOrderClick}
                >
                    Place Order
                </button>

            </div>
        </div>
    )
}

export default Cart