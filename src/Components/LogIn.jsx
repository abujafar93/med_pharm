import React, { useState } from 'react'
import "../StyleSheets/logIn.css"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';




const LogIn = () => {

    const [showPassword, setShowPassword] = useState(false)

    const togglePassword = ()=>{
        setShowPassword(!showPassword)
    }

  return (
    <div className='logIncontainer'>
        <div className='card'>
            <div className='logo'>MEDIPHARM ASSISTANT</div>
            <h3>Welcome Back!</h3>
            <h2>Login to your Account</h2>
            <form>
            <span className='danger_msg'>failed to login</span>
                <div className='input_box'>
                    <label>Email Address</label><br/>
                    <input type="email" placeholder='Enter your Email Address'/><br/>
                </div>
                <div className='input_box'>
                    <label>Password</label><br/>
                    <div className='password'>
                        <input type={showPassword ? "text" : "password"} placeholder='Enter your Password'/>
                        <div className='icon' onClick={togglePassword}>
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </div>
                    </div>
                </div>
            <a href='#' className='forget_psw'>Forgot Password?</a>
            <br/>
            <button className='logIn_btn'>Login</button>
            </form>
            <p>Drug Monitoring 2021</p>
        </div>
    </div>
  )
}

export default LogIn