const Order = require("../models/order.model")
exports.getOrders = async()=>{
    return await Order.findAll();
}

exports.createOrder = async(data)=>{
    if(data.calculate){
        return {
            actualBill:data.actualBill,
            optimisedBill:data.optimisedBill
        }
    }
    return await Order.create({
        user_name:data.user_name || "Spiderman",
        email:data.email||"spiderman@spiderman.com",
        actual_bill:data.actualBill,
        optimised_bill:data.optimisedBill
    });
}