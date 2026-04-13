const {Order,OrderItem} = require("../models/index.model");
exports.getOrders = async()=>{
    return await Order.findAll({
        include:{model:OrderItem},
        order:[["createdAt","DESC"]]
    });
}

exports.createOrder = async(data,items)=>{
    const order = await Order.create(data);
    const orderItems = items.map(item=>({
        order_id:order.id,
        product_id:item.id,
        quantity:item.quantity,
        price:item.price
    }));

    await OrderItem.bulkCreate(orderItems);
    return order;
}