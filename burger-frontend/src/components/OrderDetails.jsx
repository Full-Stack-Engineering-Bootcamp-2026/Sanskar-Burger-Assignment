import axios from 'axios';
import React, { useEffect, useState } from 'react'

const OrderDetails = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
            const response = await axios.get("http://localhost:3000/order");
            console.log(response.data);

            setOrders(response.data);
        };
        fetchOrders();
    }, [])
    if (orders.length === 0)
        return <div>No Order history</div>
    return (
        <div className='bg-[#1f1f1f] flex justify-center pt-10 min-h-screen'>
            <div className='w-150 bg-[#2a2a2a] p-6 rounded-3xl'>
                <h1 className='font-extrabold text-white mb-10'>Orders History</h1>
                {orders.map(order => {
                return <div className='border-b border-gray-50 pb-4'>

                    <div className='text-white flex'>
                        <h1 className='font-extrabold text-5xl p-2'>{order.id}</h1>
                        <h1 className='p-2'>{order.user_name}</h1>
                        <h1 className='p-2'>{order.email}</h1>
                        <h1 className='p-2'>{order.optimised_bill}</h1>
                        <h1 className='p-2'>{order.total_bill}</h1>
                    </div>


                </div>


            })}
            </div>
            
        </div>
    )
}

export default OrderDetails