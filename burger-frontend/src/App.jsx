import { Route, Routes } from 'react-router-dom'
import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Checkout from './components/Checkout'
import OrderDetails from './components/OrderDetails'

const App = ()=>{
  return (
    <div className='min-h-screen font-[pt-serif] bg-[#0d0d0d]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HeroSection/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/order' element={<OrderDetails/>}/>
        <Route path= '*' element={<NotFound/>}/>
      </Routes>
      <ToastContainer position='top-center'/>
    </div>
  )
}

export default App
