import React, { useEffect } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';
import FilterButtons from './FilterButtons';
import { useState } from 'react';


const HeroSection = ({ search }) => {
  const [products, setProducts] = useState([]);
  // const [combos,setCombos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      let url = "http://localhost:3000"
      const queryParams = []
      if (selectedCategory.length > 0) {
        // const category = selectedCategory.filter(category => category !== "VEG" && category !== 'NONVEG')
        // if (category.length > 0)
        queryParams.push(`category=${selectedCategory.join(',')}`)
      }
      if (selectedType)
        queryParams.push(`type=${selectedType}`);
      if (search && search.trim() !== '')
        queryParams.push(`name=${search}`)
      if (queryParams.length > 0)
        url += `?${queryParams.join('&')}`;
      console.log(url);

      const response = await axios.get(url);
      // console.log(response)
      setProducts(response.data);      
    }
    fetchProducts();
  }, [selectedCategory, selectedType, search])

  // useEffect(()=>{
  //   const fetchCombos = async()=>{
  //     try{
  //       const response = await axios.get("http://localhost:3000/combo");
  //       setCombos(response.data);
  //     }
  //     catch(err){
  //       console.log(err);
  //     }
  //   }
  //   fetchCombos();
  // },[])

  const renderedProducts = products.map(product => {

    return <ProductCard key={product.id} product={product} />
  })

  // const renderedCombos = combos.map(combo => {

  //   return <ProductCard key={combo.id} product={combo} />
  // })
  return (
    <div className='mt-10 ml-4'>
      <h1 className='mb-5 text-6xl text-center font-extrabold font-[pt-montserrat] text-[#ffff]'>Our Menu</h1>
      <FilterButtons
        selectedCategory={selectedCategory}
        selectedType={selectedType}
        setSelectedCategory={setSelectedCategory}
        setSelectedType={setSelectedType}
      />
      <div className='flex flex-wrap justify-start gap-10 mt-5 ml-10'>
        {renderedProducts}
        {/* {renderedCombos} */}
      </div>
    </div>
  )
}

export default HeroSection