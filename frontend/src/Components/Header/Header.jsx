import React from 'react'
import './Header.css'
import { assets } from '../../assets/assest'

const Header = () => {
  return (
    <div className='section_2'>
      <div className="header_main">
        <div className="header_left">
          <div className="header_top">
            <img src={assets.iphone} alt="" />
            <div className='header_top_button'><p>Shop Now</p></div>
          </div>
          <div className="header_bottom">
            <img src={assets.LED} alt="" />
            <div className='header_bottom_button'><p>Shop Now</p></div>
          </div>
        </div>
        <div className="header_right">
          <img src={assets.bycycle}/>
          <div className='header_right_button'><p>Shop Now</p></div>
        </div>
      </div>
    </div>
  )
}

export default Header