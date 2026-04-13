const orderService = require("../services/order.service");
exports.getOrders = async(req,res)=>{
    const orders = await orderService.getOrders();
    res.json(orders);
}

exports.checkout = async(req,res)=>{
    try{
        const order = await orderService.checkout(req.body);
        res.set('status',201);
        res.json(order);
    }
    catch(err){
        return res.status(500).json({error:err.message})
    }
}