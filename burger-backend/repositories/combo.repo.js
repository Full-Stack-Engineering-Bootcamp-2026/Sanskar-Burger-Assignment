const {Combo,ComboItem, Product} =  require('../models/index.model');
exports.getCombos = async()=>{
    return await Combo.findAll({
        include:{model:ComboItem,
            include:{model:Product}
        }
    });
}