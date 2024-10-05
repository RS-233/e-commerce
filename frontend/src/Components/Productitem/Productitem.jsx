import React, { useContext, useState } from 'react'
import './Productitem.css'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assest'
import { Link } from 'react-router-dom'


const Productitem = ({id,name,originalprice,offerprice,description,image,}) => {

    const {cartItems,addToCart,removeFromCart,url,getSingleProduct} = useContext(StoreContext);
    
    
    

  return (
    <div className='product' onClick={()=> getSingleProduct(id)}>
      <div className='product-discount'>10% Discount</div>
      <img className='product-favourite' src={assets.favourite} alt="" />
      <div className='product-favourate'></div>
        <div className="product-item-img-container">
            <Link to ="/productdetails"><img className='product-item-image' src={url+`/images/`+image} alt="" /></Link>
        </div>
        <div className="product-item-info">
            <div className="product-item-rating">
                <p>{name}</p>
                <img src={assets.rating} alt="" />
            </div>
            <div className='product-item-desc'>
              <p>{description}</p>
            </div>
            <div className='product-item-price'>
              <p>₹{offerprice}</p>
              <p>₹{originalprice}</p>
            </div>
            {!cartItems[id]
              ?<img className='add' onClick={()=>addToCart(id)} src={assets.addtocart} alt="" />
              :<div className='product-item-counter'>
                  <img onClick={()=>removeFromCart(id)} src={assets.removecart} alt="" />
                  <p>{cartItems[id]}</p>
                  <img onClick={()=>addToCart(id)} src={assets.addtocart} alt="" />
              </div>
            }
        </div>
      
    </div>
  )
}

export default Productitem