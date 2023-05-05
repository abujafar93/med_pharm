import React from 'react'
import SideNav from './SideNav'
import "../StyleSheets/Drug.css"
import Header from './Header'


const Drugs = () => {
  return (
    <div className='dashBoard'>
        <SideNav />
        <div className='container'>
          <Header />
          <div className='drug'></div>
        </div>
    </div>
  )
}

export default Drugs