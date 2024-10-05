import React, { useState } from 'react'
import './itemDisplay.css'
import { useContext } from 'react'
import Productitem from '../Productitem/Productitem'
import { StoreContext } from '../../Context/StoreContext'

const ItemDisplay = ({category}) => {
  

   const {itemlist} = useContext(StoreContext)

   

  return (
    <div className='item-display'>
    <div className='item-display-inner' id='item-display-main'>
      <h2>{category}</h2>
      <div className="item-display-list">
        {itemlist.map((item, index) => {
          if(item.category === category){
              return <div className='item-display-main' >
                <Productitem key={index} id={item._id} name={item.name} originalprice={item.originalprice} offerprice={item.offerprice} description={item.description} image={item.image}/>
              </div>
            }
            }) }
      </div>
    </div>
    </div>
  )
}

export default ItemDisplay