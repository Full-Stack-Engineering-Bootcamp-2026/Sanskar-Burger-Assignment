const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Combo = sequelize.define("Combo",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
},{
    timestamps:false,
})

module.exports = Combo;