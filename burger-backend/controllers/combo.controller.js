const comboService = require('../services/combo.service');

exports.getCombos = async(req,res)=>{
    try{
        const combos = await comboService.getCombos();
        res.json(combos);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}