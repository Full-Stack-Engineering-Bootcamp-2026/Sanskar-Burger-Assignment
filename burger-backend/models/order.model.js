const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Order = sequelize.define("Order", {
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    actual_bill: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    optimised_bill: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    timestamps:true,
    updatedAt:false
})

module.exports = Order