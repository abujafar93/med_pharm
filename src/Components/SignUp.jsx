import React, { useState } from 'react'
import "../StyleSheets/SignUp.css"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';


const SIgnUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const togglePassword = ()=>{
        setShowPassword(!showPassword)
    }

    

  return (
        <div className='signUpContainer'>
        <h2>MEDIPHARM ASSISTANT</h2>
            <div className='card'>
                    <h1>Sign Up</h1>
                    <p>Sign up as A Super Admin and create other accounts</p>
                    <hr />
                    <form>
                        <div className='input_box name'>
                            <div className='firstName'>
                                <label>First Name</label><br />
                                <input type="text" />
                            </div>
                            <div className='lastName'>
                                <label>Last Name</label><br />
                                <input type="text" />
                            </div>
                        </div>
                        
                        <div className='input_box'>
                            <label>Email Address</label><br />
                            <input type="email" />
                        </div>
                        
                        <div className='input_box'>
                            <label>Phone Number</label><br />
                            <input type="phone" />
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

                        <div className='chk_box'>
                            <input type="checkbox"/>
                            <label>Creating an account means you're okay with our Terms of Service, Privacy Policy and our default Notification Settings.</label>
                        </div>

                        <button>Create Account</button>
                    </form>
                    <p className='toLogIn'>Have an account? <a href='#'>Login</a></p>
            </div>
        </div>
  )
}

export default SIgnUp