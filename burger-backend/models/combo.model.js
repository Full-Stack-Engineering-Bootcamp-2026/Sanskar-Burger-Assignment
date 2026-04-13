const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Combo = sequelize.define("Combo",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    timestamps:false,
    updatedAt:false
})

module.exports = Combo