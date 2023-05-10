import React from 'react'

const BaordEmail = () => {
  return (
    <div className='emailSetUp'>
        <div className='emailInputBox'>
            <label>Assign Username</label><br/>
            <input type="email" placeholder='Enter your Email Address'/><br/>
            <label>Default Password</label><br/>
            <input type="password" />
        </div>
</div>
  )
}

export default BaordEmail