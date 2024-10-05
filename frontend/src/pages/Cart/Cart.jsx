import { useContext } from 'react';
import "./Cart.css";
import React from 'react'
import { StoreContext } from '../../Context/StoreContext';

const Cart = () => {
  
  const {
    cartItems,
    itemlist,
    removeFromCart,
    addToCart,
    getTotalCartAmount,
    url,
  } = useContext(StoreContext);

  return (
    <div className="cart">
    <div className="cart-main">
      <div className="cart-main-left">
      {itemlist.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
                <div className="cart-item-main">
                  <p className="cart-item-main-discount">10% off</p>
                  <div className="cart-product-image">
                    <img src={url + "/images/" + item.image} alt="" />
                  </div>
                  <div className="cart-item-headings">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-description">{item.description}</p>
                    <div className="cart-item-price">
                    <p>₹ {item.offerprice}</p>
                      <p>₹ {item.originalprice}</p>
                    </div>
                    <div className="cart-item-add-remove">
                      <p onClick={() => removeFromCart(item._id)} className="cart-item-remove"> x</p>
                      <p>{cartItems[item._id]}</p>
                      <p onClick={() => addToCart(item._id)} className="cart-item-add">+</p>
                      
                    </div>
                    <p className="cart-item-totalprice">₹{item.offerprice * cartItems[item._id]}</p>
                  </div>
                </div>
            );
          }
        })}
      </div>
      <div className="cart-main-right">
        <div className="cart-main-right-heading"><p>Order Summery</p></div>
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
            <div className="cart-total-details">
                <p>Price</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Discount</p>
                <p> - ₹{getTotalCartAmount() - (getTotalCartAmount()/100*90)}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>₹{getTotalCartAmount() === 0 ? 0 : 10}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b><p>Total</p></b>
                <b><p>
                  ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10 - (getTotalCartAmount()/100*10)}
                </p></b>
              </div>
            </div>
            <div className="cart-promocode">
              <p>Coupons Code</p>
              <input type="text" placeholder="Enter Code" />
              <button className="cart-promocode-button">Apply Code</button>
            </div>
            <div className="proceed-button-section">
             <button className="proceed-button" onClick={() => navigate("/address")}>
              Place Order
             </button>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Cart