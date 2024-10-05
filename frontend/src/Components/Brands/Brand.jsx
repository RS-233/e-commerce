import React from "react";
import "./Brand.css";
import { assets } from "../../assets/assest";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../Context/storeContext'
import Branddisplay from "../Branddisplay/Branddisplay";


const Brand = ({brandname, category,link}) => {

  const { itemlist } = useContext(StoreContext)

  return (
    <div className="fashionbrand">
      <div className="fashionbrand_main">
        <Link to={link} className="fashionbrand_main-top">
          <p>{brandname}</p>
          <img src={assets.arrow} alt="" />
        </Link>
        <div className="fashion_main_inner">
          {itemlist.map((item, index) => {
            if(item.category === category)
              return <div className='item-display-main' >
                <Branddisplay id={item._id} name={item.name} image={item.image}/>
              </div>
            }) }
        </div>
      </div>
    </div>
  );
};

export default Brand;
