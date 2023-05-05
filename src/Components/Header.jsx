import React from 'react'
import "../StyleSheets/Header.css"
import { IoNotificationsOutline } from "react-icons/io5"
import { FaUserAlt } from "react-icons/fa"
import { RiLogoutCircleRLine } from "react-icons/ri"



const Header = () => {
  return (
    <div className='header'>
        <nav>
            <div className='logoBox'>
                <input className='search_box' type="search" placeholder='Search here...' />
            </div>
            <div className='nav-icon-box'>
                <div className='bell-icon'><IoNotificationsOutline /></div>
                <div className='person-icon'><FaUserAlt /></div>
                <div className='exit-icon'><RiLogoutCircleRLine /></div>
            </div>
        </nav>
    </div>
  )
}

export default Header