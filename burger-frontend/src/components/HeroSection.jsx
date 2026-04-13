import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/thunks/fetchProducts';
import ProductCard from './ProductCard';
import FilterButtons from './FilterButtons';


const HeroSection = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error,filters,name,type } = useSelector(state => state.products);
  useEffect(() => {
    console.log(name);
    
    dispatch(fetchProducts({filters,name,type}))
  }, [filters,name,dispatch])
  if (isLoading)
    return <div>Loading......</div>
  if (error)
    return <div>Error !!!!!!!</div>
    
  const renderedProducts = data.map(product => {

    return <ProductCard key={product.id} product={product} />
  })
  return (
    <div className='mt-10 ml-4'>
      <h1 className='mb-5 text-6xl text-center font-extrabold font-[pt-montserrat] text-[#ffff]'>Our Menu</h1>
      <FilterButtons/>
      <div className='flex flex-wrap justify-evenly'>
        {renderedProducts}
      </div>
    </div>
  )
}

export default HeroSection