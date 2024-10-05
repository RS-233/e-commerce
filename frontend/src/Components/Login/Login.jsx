import React from 'react'
import { useContext, useState } from 'react'
import { StoreContext } from '../../Context/storeContext'
import {assets} from '../../assets/assest'
import'./Login.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Login = () => {
  
    const {setToken} = useContext(StoreContext)

    const [currState,setCurrState] = useState("Login")
    const [data,setData] = useState({
        name:"",
        phone:"",
        email:"",
        password:""
    })

    const onChangehandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin = async(event) => {
            event.preventDefault()
            let newUrl = 'http://localhost:4000';
            if(currState === "Login") {
                newUrl += `/user/login`
            }
            else {
                newUrl += `/user/register`
            }
   
           const response = await axios.post(newUrl,data);
   
           if (response.data.success){
               setToken(response.data.token);
               localStorage.setItem("token",response.data.token);
               alert(response.data.message)
           }
           else{
               alert(response.data.message)
           } 
    }

  return (
    <div className='login-popup'>
        <div className='login-popup-left' >
            <img src={assets.Logo} alt="" />
            <div className='login-image'>{currState==="Login"?
                <img className='login-inner-img' src={assets.log_in} style={{height: "76%", width: "84%", marginLeft: "19px", marginTop: "8px"}} alt="" />
                :
                <img src={assets.sign_in} style={{height: "80%", width: "80%", marginLeft: "4px"}} alt="" />}</div>
            </div>
        <div className='login-popup-right'>
            <form onSubmit={onLogin} className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <Link to='/'><img onClick={()=>setShowLogin(false)} src={assets.cancel} alt="" /></Link>
                </div>
                <div className="login-popup-inputs">
                    {currState==="Login"?<></>:<input type="text" name='name' onChange={onChangehandler} value={data.name} placeholder='Full Name' required/>}
                    <input type="email" name='email' onChange={onChangehandler} value={data.email} placeholder='Email' required />
                    <input type="phone" name='phone' onChange={onChangehandler} value={data.phone} placeholder='phone Number' required />
                    <input type="Password" name='password' onChange={onChangehandler} value={data.password} placeholder='Password' required />
                </div>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
                <button className='submit-button' type='submit'>{currState==="Login"?"Login":"CreateAccount"}</button>
                
                <div className='login-footer'>{currState==="Login"?
                <p>Create a new account? <span onClick={()=>setCurrState("signUp")}>Click here</span></p>
                :
                <p>Already have an account? <span onClick={()=>setCurrState("Login")}> Login here</span></p>}</div>
                
                
            </form>
            </div>
        </div>
  )
}

export default Login