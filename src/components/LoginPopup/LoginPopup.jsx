import React from 'react'
import './LoginPopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrstate] = useState("Login")
  return (
    <div className='login-popup'>
        <form  className="login-popup-container">
            <div className="login-popup-title">
                <h2 className="title">{currState}</h2>
                <img onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currState==="Login"?<></>:<input type="text" placeholder='your name' required/>}
                
                <input type="email" placeholder='your email' required/>
                <input type="password" placeholder='your password' required/>
            </div>
            <button>{currState==="Sign Up"?"create Account":"login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use privecy&polices.</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account?<span onClick={()=>setCurrstate("Sign Up")}>Click here</span></p>:
            <p>Already Have an account?<span onClick={()=>setCurrstate("Login")}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup