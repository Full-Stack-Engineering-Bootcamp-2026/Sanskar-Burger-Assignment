const orderRepo = require('../repositories/order.repo');
const comboRepo = require('../repositories/combo.repo');
const comboLogic = async(items)=>{
    const combos = await comboRepo.getCombos();
    let bill = 0;
    let appliedCombos = [];
    const itemCount = {};
    items.forEach(item => {
        itemCount[item.id] = (itemCount[item.id]||0) + item.quantity;
    });
    combos.sort((a,b)=> b.ComboItems.length - a.ComboItems.length);
    combos.forEach(combo=>{
        if(!combo.ComboItems || combo.ComboItems.length === 0) return;
        while(true){
            let comboApplicable = true;
            // let temp = {...itemCount};
            for(let comboItem of combo.ComboItems){
                if(!itemCount[comboItem.product_id] || itemCount[comboItem.product_id]<=0){
                    comboApplicable = false;
                    break;
                }
                itemCount[comboItem.product_id] -= 1;
            }
            if(!comboApplicable) break;
            combo.ComboItems.forEach(comboItem=>{
                itemCount[comboItem.product_id] -= 1;
            });
            bill += combo.price;
            appliedCombos.push(combo.name);
        }
    });
    items.forEach(item=>{
        const remainingItems = itemCount[item.id] || 0;
        if(remainingItems > 0){
            bill += remainingItems * item.price;
            itemCount[item.id] = 0;
        }
    });
    return {optimisedTotal:bill,appliedCombos};
}


exports.getOrders = async()=>{
    return await orderRepo.getOrders();
}

exports.checkout = async(data)=>{
    const {user,items,calculateOptimizedTotal} = data;
    const actualTotal = items.reduce((sum,item)=>sum + item.price * item.quantity,0);
    const {optimisedTotal,appliedCombos} = await comboLogic(items);
    if(calculateOptimizedTotal)
        return {actualTotal,optimisedTotal,appliedCombos}
    const orderDetails = {
        user_name:user.name,
        email:user.email,
        actual_bill:actualTotal,
        optimised_bill:optimisedTotal
    };
    await orderRepo.createOrder(orderDetails,items);
    return {
        actualTotal,
        optimisedTotal,
        appliedCombos
    }
}