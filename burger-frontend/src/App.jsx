import { Route, Routes } from 'react-router-dom'
import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import OrderDetails from './components/OrderDetails'
import { useState } from 'react'

const App = ()=>{
  const [search,setSearch] = useState("");
  return (
    <div className='min-h-screen font-[pt-serif] bg-[#0d0d0d]'>
      <Navbar setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<HeroSection search={search}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<OrderDetails/>}/>
        <Route path= '*' element={<NotFound/>}/>
      </Routes>
      <ToastContainer position='top-center'/>
    </div>
  )
}

export default App
