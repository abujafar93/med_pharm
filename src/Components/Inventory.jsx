import React from 'react'
import SideNav from './SideNav'
import "../StyleSheets/Inventory.css"
import Header from './Header'


const Inventory = () => {
  return (
    <div className='dashBoard'>
        <SideNav />
        <div className='container'>
          <Header />
          <div className='inventory'></div>
        </div>
    </div>
  )
}

export default Inventory