import React from 'react'

const SignUp = () => {
  return (
    <div className='container'>
        <h2>MEDIPHARM ASSISTANT</h2>
        <div className='card'>
            <h1>Sign Up</h1>
            <p>Sign up as A Super Admin and create other accounts</p>
            <hr />
            <form>
                <div className='name'>
                    <div className='firstName'>
                        <label>First Name</label>
                        <input type="text" />
                    </div>
                    <div className='lastName'>
                        <label>Last Name</label>
                        <input type="text" />
                    </div>
                </div>
                <div className='email'>
                    <label>Email Address</label>
                    <input type="email" />
                </div>
                <div className='phone'>
                    <label>Phone Number</label>
                    <input type="phone" />
                </div>
                <div className='password'>
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div className='agree'>
                    <input type="checkbox"/>
                    <p>Creating an account means you're okay with our Terms of Sservice, Privacy Policy and our default Notification Settings.</p>
                </div>
                <button>Create Account</button>
            </form>
            <p>Have an account? <a href='#'> Login</a></p>
        </div>
    </div>
  )
}

export default SignUp