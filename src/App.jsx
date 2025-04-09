import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Cart } from './pages/Cart/Cart'
import { PlaceOrder } from './pages/PlaceOrder/PlaceOrder'
import LoginPopup from './components/LoginPopup/LoginPopup'
const App = () => {
  const [showLogin,setShowlogin] = useState(false)
  return (
    <div className='border'>
      {showLogin?<LoginPopup setShowLogin={setShowlogin}/>:<></>}
      <Navbar setShowlogin={setShowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/PlaceOrder' element={<PlaceOrder/>} />
      </Routes>
    </div>
  )
}
export default App
