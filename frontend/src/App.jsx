import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import { useState } from 'react'
import ItemDisplay from './Components/itemDisplay/ItemDisplay'
import Productdetails from './Components/Productdetail/Productdetail'
import Address from './pages/Address/Address'
import Cart from './pages/Cart/Cart'



const App = ({}) => {

  const [showLogin,setShowLogin] = useState(false)


  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className='innerdiv'>
     <Navbar setShowLogin={setShowLogin}/>
     <br />
     <br />
     <br />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/electronics' element={<ItemDisplay category="Electronics"/>}/>
        <Route path='/appliances' element={<ItemDisplay category="Appliances"/>}/>
        <Route path='/fashion' element={<ItemDisplay category="Fashion"/>}/>
        <Route path='/toys' element={<ItemDisplay category="Toys"/>}/>
        <Route path='/kitchen' element={<ItemDisplay category="Kitchen"/>}/>
        <Route path='/furniture' element={<ItemDisplay category="Furniture"/>}/>
        <Route path='/grocery' element={<ItemDisplay category="Grocery"/>}/>
        <Route path='/productdetails' element={<Productdetails/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path="address" element={<Address/>}/>
     </Routes>
  </div>
  </>
  )
}

export default App
