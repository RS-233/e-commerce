import React, { useContext, useState } from "react";
import { StoreContext } from "../../Context/storeContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Address.css";
const Address = () => {
  const { getTotalCartAmount, token, itemlist, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    fullName: "",
    phone: "",
    alt_No: "",
    pincode: "",
    street: "",
    city: "",
    state: "",
    country: "",
    H_No: "",
    area:"",
    addtype:""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const PlaceOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    itemlist.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <div className="address">
      <div className="address-main">
        <div className="address-main-left">
          <div className="address-main-left-heading">Enter Your Delivery Address</div>
          <form onSubmit={PlaceOrder} className="address-main-left-form" action="">
              <div className="address-main-left-multi-field">
                <input
                  required
                  name="fullName"
                  onChange={onChangeHandler}
                  value={data.fullName}
                  type="text"
                  placeholder="Full Name"
                />
                <input
                required
                name="phone"
                onChange={onChangeHandler}
                value={data.phone}
                type="number"
                placeholder="Phone number"
              />
              </div>
              <div className="address-main-left-multi-field">
              <input
                required
                name="alt_No"
                onChange={onChangeHandler}
                value={data.alt_No}
                type="Number"
                placeholder="Alternative number"
              />
              <input
                required
                name="street"
                onChange={onChangeHandler}
                value={data.pincode}
                type="text"
                placeholder="Pincode"
              />
              </div>
              <div className="address-main-left-multi-field">
                <input
                  required
                  name="street"
                  onChange={onChangeHandler}
                  value={data.street}
                  type="text"
                  placeholder="Street"
                />
                <input
                  required
                  name="city"
                  onChange={onChangeHandler}
                  value={data.city}
                  type="text"
                  placeholder="City"
                />
              </div>
              <div className="address-main-left-multi-field">
                <input
                  required
                  name="state"
                  onChange={onChangeHandler}
                  value={data.state}
                  type="text"
                  placeholder="State"
                />
                <input
                  required
                  name="country"
                  onChange={onChangeHandler}
                  value={data.country}
                  type="text"
                  placeholder="Country"
                />
              </div>
              <div className="address-main-left-multi-field">
              <input
                required
                name="houseNo"
                onChange={onChangeHandler}
                value={data.H_No}
                type="text"
                placeholder="House No., Building Name"
              />
              <input
                required
                name="area"
                onChange={onChangeHandler}
                value={data.area}
                type="text"
                placeholder="Area., Colony Name"
              />
              </div>
              <div className="address-main-left-multi-field-checkbox">
                <label htmlFor=""><input type="radio" name="addtype" required onChange={onChangeHandler} value={data.addtype} />Home <span>(All day Delivery)</span></label>
                <label htmlFor=""><input type="radio" name="addtype" required onChange={onChangeHandler} value={data.addtype}/>Work <span>(Delivery between 10AM to 5PM)</span></label>
              </div>
          </form>
        </div>
        <div className="address-main-right">
          <form onSubmit={PlaceOrder} className="address-main-right-form" action="">
                <div className="address-main-right-form-main">
                  <div className="address-main-right-form-heading" >
                  <h2>Cart Totals</h2>
                  </div>
                  <div className="address-main-right-form-cart-total-details">
                  <p>Price</p>
                  <p>₹{getTotalCartAmount()}</p>
                  </div>
                  <hr />
                  <div className="address-main-right-form-cart-total-details">
                  <p>Discount</p>
                  <p> - ₹{getTotalCartAmount() - (getTotalCartAmount()/100*90)}</p>
                  </div>
                  <hr />
                  <div className="address-main-right-form-cart-total-details">
                  <p>Delivery Fee</p>
                  <p>₹{getTotalCartAmount() === 0 ? 0 : 10}</p>
                  </div>
                  <hr />
                  <div className="address-main-right-form-cart-total-details">
                  <b><p>Total</p></b>
                  <b><p>
                    ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10 - (getTotalCartAmount()/100*10)}
                  </p></b>
                  </div>
                </div>
                <div className="address-main-right-form-button">
                <button type="submit">PROCEED TO PAYMENT</button>
                </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Address;
