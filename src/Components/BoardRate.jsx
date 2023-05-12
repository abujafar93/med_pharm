import React from 'react'

const BoardRate = () => {
  return (
    <div className='boardRates'>
      <div>
        <h4>Assign User Roles</h4>
      </div>

      <div className='roleContainer'>
        <div className='rolesBox'>
          <label for ="toggle" >Admin Full role</label>
          <input type="range" className='toggle' min="0" max="1"/>
        </div>

        <div className='rolesBox'>
          <label for ="toggle">Access to Subscription</label>
          <input type="range" className='toggle' min="0" max="1"/><br/>
        </div>

        <div className='rolesBox'>
          <label for ="toggle">Inventory</label>
          <input type="range" className='toggle' min="0" max="1"/><br/>
        </div>

        <div className='rolesBox'>
          <label for ="toggle">See other Staff</label>
          <input type="range" className='toggle' min="0" max="1"/>
        </div>
      </div>
    </div>
  )
}

export default BoardRate