const orderService = require("../services/order.service");
exports.getOrders = async (req, res) => {
    try {
        console.log(req.body);
        const orders = await orderService.getOrders();
        res.json(orders);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
    
}

exports.checkout = async (req, res) => {
    try {
        const order = await orderService.checkout(req.body);
        res.status(201).json(order);
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}