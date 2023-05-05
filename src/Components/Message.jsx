import React from 'react'
import SideNav from './SideNav'
import "../StyleSheets/Message.css"
import Header from './Header'


const Message = () => {
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

export default Message