import React from 'react'
import SideNav from './SideNav'
import Header from './Header'
import "../StyleSheets/Subscription.css"


const Subscription = () => {
  return (
    <div className='dashBoard'>
        <SideNav />
        <div className='container'>
          <Header />
          <div className='client'></div>
        </div>
    </div>
  )
}

export default Subscription