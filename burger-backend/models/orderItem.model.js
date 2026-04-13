const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const OrderItem = sequelize.define("OrderItem", {
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{timestamps:false});
module.exports = OrderItem;
