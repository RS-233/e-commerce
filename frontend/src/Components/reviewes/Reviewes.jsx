import React, {useState} from 'react'
import './Review.css'
import axios from 'axios'

const Reviewes = ({setShowReview}) => {
  
  const [data,setData] = useState({
    name:"",
    rating:"",
    comment:"",
})

const onChangehandler = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setData(data=>({...data,[name]:value}))
}

const Submit = async(event) => {
  event.preventDefault()
  let url = 'http://localhost:4000';
  url += `/review/addreview`

  const response = await axios.post(url,data);
  if(response.data.success){
    alert("Review Added Successfully")
    setShowReview(false)
  }
  else{
    alert(response.data.message)
} 
}

  return (
    <div className='review'>
      <form onSubmit={Submit}>
      <div className="rating">
      <input type="text" name='name' className='rating-box' onChange={onChangehandler} value={data.name} placeholder='Enter your Name' />
        <input type="number" name='rating' className='rating-box' onChange={onChangehandler} value={data.rating} placeholder='Enter Rating (From 1 to 5)' />
      </div>
      <div className="review-description"><textarea type="text" name="comment" rows="9" cols="68" placeholder='Enter your Reviews' onChange={onChangehandler} value={data.comment}></textarea></div>
      <div className='review-buttons'>
        <button onClick={() => setShowReview(false)}>cancle</button>
        <button type='submit'>Add Review</button>
      </div>
      </form>
    </div>
  )
}

export default Reviewes