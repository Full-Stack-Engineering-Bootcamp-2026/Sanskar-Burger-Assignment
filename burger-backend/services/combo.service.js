const comboRepo = require('../repositories/combo.repo');
exports.getCombos = async(req,res)=>{
    return await comboRepo.getCombos();
};