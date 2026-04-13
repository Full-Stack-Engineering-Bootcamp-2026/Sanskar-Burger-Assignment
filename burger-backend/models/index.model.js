const Product = require('./product.model');
const Order = require('./order.model');
const OrderItem = require('./orderItem.model');
const Combo = require('./combo.model');
const ComboItem = require('./comboItem.model');
const { Sequelize } = require('sequelize');
const sequelize = require('../config/db');


Combo.hasMany(ComboItem,{foreignKey:"combo_id"});
ComboItem.belongsTo(Combo,{foreignKey:"combo_id"});

Product.hasMany(ComboItem,{foreignKey:"product_id"});
ComboItem.belongsTo(Product,{foreignKey:"product_id"});

Order.hasMany(OrderItem,{foreignKey:"order_id"});
OrderItem.belongsTo(Order,{foreignKey:"order_id"});

Product.hasMany(OrderItem,{foreignKey:"product_id"});
OrderItem.belongsTo(Product,{foreignKey:"product_id"});

module.exports = {Product,Order,OrderItem,Combo,ComboItem,sequelize,Sequelize}