const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const OrderCombo = sequelize.define("OrderCombo",{
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            max:9,
            min:1
        }
    }
},{
    timestamps:false,
    updatedAt:false
})

module.exports = OrderCombo;