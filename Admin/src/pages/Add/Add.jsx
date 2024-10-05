import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
const Add = ( {url}) => {

    const [image, setImage] = useState(false)

    const [data, setData] = useState({
        name: "",
        description: "",
        originalprice:"",
        offerprice: "",
        category: ""
    })


    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("originalprice", Number(data.originalprice))
        formData.append("offerprice", Number(data.offerprice))
        formData.append("category", data.category)
        formData.append("image", image)
        const response = await axios.post(`${url}/product/add`, formData)
        if (response.data.success) {
            setData({
                name: "",
                description: "",
                originalprice:"",
                offerprice: "",
                category: ""
            })
            setImage(false);
            toast.success(response.data.message)
            console.log(error)
        }
        else {
            toast.error(response.data.message)
            console.log(error)
        }
    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className="add-image-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
                </div>
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here'></textarea>
                </div>
                <div className="original_price">
                    <p>original price</p>
                    <input onChange={onChangeHandler} value={data.originalprice} type="Number" name='originalprice' placeholder='₹' />
                </div>
                <div className="add-category-price">
                    <div className="add-category">
                        <p>Product category</p>
                        <select onChange={onChangeHandler} name="category" >
                            <option value="Fashion">Fashion</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Appliances">Appliances</option>
                            <option value="Toys">Toys</option>
                            <option value="Kitchen">Kitchen</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Grocery">Grocery</option>
                        </select>
                    </div>
                    
                    <div className="add-price">
                        <p>offer price</p>
                        <input onChange={onChangeHandler} value={data.offerprice} type="Number" name='offerprice' placeholder='₹' />
                    </div>
                </div>
                <button type='submit' className='add-btn'>Add</button>
            </form>

        </div>
    )
}
export default Add