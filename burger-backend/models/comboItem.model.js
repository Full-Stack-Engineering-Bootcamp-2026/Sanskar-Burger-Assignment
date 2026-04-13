const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const ComboItem = sequelize.define("ComboItem",{
    combo_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    product_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{timestamps:false});
module.exports = ComboItem;