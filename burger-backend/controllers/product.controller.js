const productService = require('../services/product.service');
exports.getProducts = async(req,res)=>{
    try{
        const products = await productService.getProducts(req.query);
        res.json(products);
    }
    catch(error){
        return res.status(500).json({error: error.message})
    }
}