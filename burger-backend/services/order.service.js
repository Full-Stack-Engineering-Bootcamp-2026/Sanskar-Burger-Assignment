const orderRepo = require('../repositories/order.repo');
const combos = [
    {
        name:"Veg Burger Combo",
        items:["Paneer Burger","Coke 500ml"],
        price:199
    },
    {
        name:"Chicken Burger Combo",
        items:["Chicken Burger","Coke 600ml"],
        price:249
    },
    {
        name:"Snack Combo",
        items:["French Fries Regular","Garlic Bread","Coke 500ml"],
        price:229
    },
    {
        name:"Wrap Combo",
        items:["Veg Wrap","French Fries Regular","Cold Coffee"],
        price:279
    },
    {
        name:"Party Combo",
        items:["Chicken Burger","French Fries Large","Pepsi 600ml","Chicken Nuggets"],
        price:499
    }
]

const optimisedTotal = (items)=>{
    let bill = 0;
    const itemCount = {};
    items.forEach(item => {
        itemCount[item.name] = (itemCount[item.name]||0) + item.quantity;
    });
    combos.sort((a,b)=> b.items.length - a.items.length);
    combos.forEach(combo=>{
        while(true){
            let comboApplicable = true;
            for(let item of combo.items){
                if(!itemCount[item] || itemCount[item]<0){
                    comboApplicable = false;
                    break;
                }
            }
            if(!comboApplicable) break;
            combo.items.forEach(item=>{
                itemCount.item -= 1;
            });
            bill += combo.price;
        }
    });
    items.forEach(item=>{
        const remainingItems = itemCount[item.name] || 0;
        if(remainingItems > 0){
            bill += remainingItems * item.price;
            itemCount[item.name] = 0;
        }
    });
    return bill;
}


exports.getOrders = async()=>{
    return await orderRepo.getOrders();
}

exports.checkout = async(data)=>{
    const items = data.items;
    const actualBill = data.total;
    const optimisedBill = optimisedTotal(items);
    return await orderRepo.createOrder({
        ...data,
        actualBill,
        optimisedBill
    })
}