import React, { useContext } from 'react'
import './Branddisplay.css'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../Context/storeContext';



const Branddisplay = ({id,image,name}) => {

    const {getSingleProduct,url} = useContext(StoreContext);
    

  return (
    <Link className='brandlink' to='/productdetails'>
      <div className='brand' onClick={()=> getSingleProduct(id)}>
        <div className="brand-item-img-container">
            <img className='brand-item-image' src={url+`/images/`+image} alt="" />
        </div>
        <div className="brand-item-info">
           <p>{name}</p>
        </div> 
      </div>
    </Link>
  )
}

export default Branddisplay