import React, { useContext, useState } from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import './Productdetail.css'
import { assets } from "../../assets/assest";
import { StoreContext } from '../../Context/StoreContext';
import Reviewes from '../reviewes/Reviewes'

const Productdetails = (id) => {
  
    const {itemlist,url,target,reviewlist,addToCart} = useContext(StoreContext)

    const [showReview, setShowReview] = useState(false)
    const navigate = useNavigate();

    const mainAddToCart = async() => {
        preventDefault()
        console.log("funtion is clicked");
        addToCart(target._id);
        console.log(target._id)
        
    }

    const buyNow = async () => {
        console.log("function is clicked")
        addToCart(target._id);
        console.log(target._id)
        navigate("/cart");
        
    }
    
    

  return (
    <div className='main'>
        {
            itemlist.map((item, index)=> {
    
                if(item._id === target._id){
                    return <div className='productdetails'>
                    <div className='inner-productdetails'>
                        <div className='inner-productdetails-left'>
                            <div className='inner-productdetails-left-img-main'><img src={url+`/images/`+item.image} alt="image not found" /></div>
                            <div className='inner-productdetails-left-images'>subimages</div>
                        </div>
                        <div className='inner-productdetails-right'>{showReview? <Reviewes setShowReview = {setShowReview}/>:<></>}
                          <div className='inner-productdetails-right-details'>
                            <div className='inner-productdetails-right-category'>Category: {item.category}</div>
                            <div className='inner-productdetails-right-productname'>{item.name}</div>
                            <div className='inner-productdetails-right-rating'>
                                <img src={assets.rating} alt="" />
                                <p>45k</p>
                            </div>
                            <div className='inner-productdetails-right-price'>
                                <p>{item.originalprice}</p>
                                <p>{item.offerprice}</p>
                                <p>Discount</p>
                            </div>
                            <div className='inner-productdetails-right-size'>
                                <div>S</div>
                                <div>M</div>
                                <div>L</div>
                                <div>XL</div>
                                <div>XXL</div>
                            </div>
                            <div className='inner-productdetails-right-desc'>
                                {item.description}</div>
                            <div className='inner-productdetails-right-btn'>
                                <button onClick={() => mainAddToCart()}>Add to Cart</button>
                                <button onClick = {() => buyNow()}>Buy Now</button>
                            </div>
                          </div>
                            <div className='reviewes'>
                                <div className='reviews-heading'>
                                <h2>Top Reviews</h2><button className='reviewes-button' onClick={()=>setShowReview('true')}>Add Review</button>
                                </div>
                                <div className='reviewes-list'>
                                    {
                                        reviewlist.map((review, index) => {
                                            return <div className='review_section'>
                                                <div className='reviewes-list-top'><p className='reviewes-list-top-user'><img src={assets.man} alt="" />{review.name}</p><p className='reviewes-list-top-rating'><img src={assets.star} alt="" />{review.rating}</p></div>
                                                <div className='reviewes-list-bottom'>testing</div>
                                            </div>
                                        } 
                                      )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
            })
        }
        <hr />
    
    </div>
  )
}

export default Productdetails