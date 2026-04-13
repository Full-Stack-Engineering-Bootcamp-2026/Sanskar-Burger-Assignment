const sequelize = require("../config/db");
const OrderCombo = require("./order-combo.model");
const Order = require("./order.model");
const OrderItems = require("./order-item.model");
const Product = require("./product.model");
const Combo = require("./combo.model");

{
    Combo.belongsToMany(Product, { through: "ComboItems" })
    Product.belongsToMany(Combo, { through: "ComboItems" })
}

{
    Order.belongsToMany(Product,{through:OrderItems})
    Product.belongsToMany(Order,{through:OrderItems})
}

{
    Order.belongsToMany(Combo,{through:OrderCombo})
    Combo.belongsToMany(Order,{through:OrderCombo})

}

module.exports = {
    sequelize,Order,Product,OrderItems,Combo,OrderCombo
}




