const productRepo = require("../repositories/product.repo");

exports.getProducts = async(filterConditions)=>{
    return await productRepo.getProducts(filterConditions);
}