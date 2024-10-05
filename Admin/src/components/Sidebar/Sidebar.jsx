import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img src={assets.add} alt="" />
          <p>Add Item</p>
        </NavLink>
        <NavLink to='/list'  className="sidebar-option">
          <img src={assets.checklist} alt="" />
          <p>List Item</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
          <img src={assets.orderstatus} alt="" />
          <p>Order</p>
        </NavLink>
      </div>
      
    </div>
  )
}

export default Sidebar
