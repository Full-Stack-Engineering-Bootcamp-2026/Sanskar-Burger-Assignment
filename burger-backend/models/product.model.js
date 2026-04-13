const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const Product = sequelize.define("Product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    timestamps:false,
})

module.exports = Product