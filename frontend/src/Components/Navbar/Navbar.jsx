import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assest'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/storeContext';


const Navbar = (setShowLogin) => {

const [state, setState] = useState("hidden")
const {getTotalCartAmount,token,setToken} = useContext(StoreContext)

const logout = () => {
  localStorage.removeItem("token");
  setToken("");
  navigate("/")
}

  return (
    <div className='navbar'>
      <div className="nav_main">
       <Link to='/' className='Link' ><div className='nav_logo'><img src={assets.Logo} alt="" /></div></Link>
       <div className='nav_search'><input type="text" placeholder='Search' /><button className='search_button'>search</button></div>
       <div className='nav_right'>
         <div className='nav_account' onMouseEnter={()=>{setState("login_links")}} onMouseLeave={() => {setState("hidden")}}>
          {
            !token?<Link to ="/login" className='Link'><div className='login_div' onClick={()=>setShowLogin(true)} >
            <img src={assets.account} alt="" /><p>Login</p></div></Link>:<div className='user_icon' ><img src={assets.man} alt="" /><p>Logout</p>
            </div>
            }
          <div className={state} onMouseEnter={()=>{setState("login_links")}} onMouseLeave={() => {setState("hidden")}}>
          <div className="signup"><p>New Customer?</p><Link to = "/login" className='Link' ><span>Clickhere</span></Link></div><hr />
            <ul className="login_links_list">
              <li><a href=""><img src={assets.profile} alt="" />My profile</a></li>
              <li><a href=""><img src={assets.box} alt="" />Orders</a></li>
              <li><a href=""><img src={assets.wishlist} alt="" />Wishlist</a></li>
              <li><a href=""><img src={assets.card} alt="" />Giftcard</a></li>
              <li><a href="" onClick={logout} >logout</a></li>
            </ul>
          </div>
         </div>
          <Link to="/cart" className='Link'><div className='nav_cart'><img src={assets.cart} alt="" /><p>cart</p></div></Link>
         <div className='nav_shop'><img src={assets.seller} alt="" /><p>seller</p></div>
       </div>
      </div>
      
    </div>
  )
}

export default Navbar
//
//