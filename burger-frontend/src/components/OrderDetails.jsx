import axios from 'axios';
import React, { useEffect, useState } from 'react'

const OrderDetails = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
            const response = await axios.get("http://localhost:3000/order");
            setOrders(response.data);
        };
        fetchOrders();
    }, [])
    if (orders.length === 0)
        return <div className='min-h-screen bg-[#1f1f1f] flex justify-center items-center'>
            <div className='text-white font-extrabold text-6xl'>No Order history</div>
        </div>
    return (<div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default text-white">
        <table className="w-full  text-left rtl:text-right text-body">
            <thead className="text-2xl text-[#fc6537] text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                <tr>
                    <th scope="col" className="px-6 py-3 font-medium">
                        User name
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                        Optimised Bill
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                        Actual Bill
                    </th>
                </tr>
            </thead>
            <tbody>
                {orders.map(order => <tr className="bg-neutral-primary border-b border-default">
                    <td className="px-6 py-4">
                        {order.user_name}
                    </td>
                    <td className="px-6 py-4">
                        {order.email}
                    </td>
                    <td className="px-6 py-4">
                        {order.optimised_bill}
                    </td>
                    <td className="px-6 py-4">
                        {order.actual_bill}
                    </td>
                </tr>)}

            </tbody>
        </table>
    </div>


    )
}

export default OrderDetails