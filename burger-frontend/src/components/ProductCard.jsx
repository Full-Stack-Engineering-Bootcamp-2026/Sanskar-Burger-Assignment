import React, { useState } from 'react'
const iconMapping = {
  "BURGER": "🍔"
  , "FRIES": "🍟",
  "DRINK": "🍹",
  "SIDES": "🧽",
  "WRAP": "🌯",
  "PIZZA": "🍕",
  "MEAL": "🍱",
}

const ProductCard = ({ product }) => {
  const { name, price, category, type,id } = product
  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    return cart ? cart : [];
  }
  const getQuantity = () => {
    let cart = getCart();
    const existingItem = cart.find(item => item.id === id)
    if (existingItem)
      return existingItem.quantity
    return 0;
  }
  const [quantity, setQuantity] = useState(getQuantity());



  const handleIncreaseClick = () => {
    setQuantity(prev => prev + 1);
    let cart = getCart();
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
      // console.log(cart);
    }
    else {
      // cart.push({item,quantity:1});
      cart.push({ id,name, price, category, type, quantity: 1 });
    }
    saveCart(cart);
    console.log(cart);

  }
  const handleDecreaseClick = () => {
    setQuantity(prev => prev - 1);
    let cart = getCart();
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      if (existingItem.quantity === 1)
        cart = cart.filter(item => item.name !== name)
      else
        existingItem.quantity -= 1;
      saveCart(cart);
    }
  }

  const handleAddToCartClick = () => {
    setQuantity(1);
    let cart = getCart();
    cart.push({ id,name, price, category, type, quantity: 1 })
    saveCart(cart);
  }


  const saveCart = (cart) => {
    return localStorage.setItem('cart', JSON.stringify(cart));
  }
  return (

    <div className='shadow-md hover:shadow-2xl p-4 flex-col justify-evenly  w-80 h-70 text-center my-3 bg-[#1f1f1f] border rounded-2xl hover:scale-[1.05] transition duration-200'>
      <div className='text-4xl'>
        <h1>{iconMapping[category]}</h1>
      </div>
      <div className='text-left'>
        <h1 className=' text-lg font-semibold text-white my-2'>{name}</h1>
        <div className="flex justify-start">
          <button className='font-extrabold bg-[#3a311b] text-[#f9b106] rounded-xl p-2 '>{category}</button>
          {type === "VEG" ? <button className='font-extrabold bg-[#253426] text-[#4ba642] mx-2 rounded-xl p-2'>Veg</button> : <button className='font-extrabold bg-[#3e2422] text-[#e84135] mx-2 rounded-xl p-2'>Non-Veg</button>}
        </div>
        <h1 className='text-2xl font-bold text-[#ff6b35]'>₹{price}</h1>


        {quantity > 0 && <div className="bg-[#2a2a2a] mt-10 text-white font-extrabold flex justify-between w-full rounded-4xl ">
          <button disabled={!(quantity > 0)} onClick={handleDecreaseClick} className=" hover:bg-[#f6593b] text-white font-bold py-2 px-4 rounded">
            {quantity === 1 ? <h1>🗑️
            </h1> : <h1>-</h1>}
          </button>
          <h1 className='py-2 px-4'>{quantity}</h1>
          <button disabled={!(quantity < 9)} onClick={handleIncreaseClick} className="hover:bg-[#f6593b] text-white font-bold py-2 px-4 rounded">
            +
          </button>
        </div>}

      </div>
      {quantity === 0 && <button className='flex mt-10  bg-[#f6593b] hover:bg-[#f44624] text-white font-bold  p-3 rounded-full w-1/4 ' onClick={handleAddToCartClick}>+ Add
      </button>}

    </div>
  )
}
export default ProductCard