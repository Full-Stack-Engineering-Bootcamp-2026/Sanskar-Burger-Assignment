const {Product} = require("../models/index.model");

exports.getProducts = async(filters) => {
    let filterConditions = {};
    let products = await Product.findAll();
    if (filters.category){
        const categories = filters.category.split(',');
        products = products.filter(product=>categories.includes(product.category));
    }
    if (filters.type)
        products = products.filter(product=>product.type === filters.type)
    if (filters.name){
        const caseInsensitive = filters.name.toLowerCase();
        products = products.filter(product => product.name.toLowerCase().includes(caseInsensitive));
    }
    return products;
}