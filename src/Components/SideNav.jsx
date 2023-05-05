import React from 'react';
import {Link} from 'react-router-dom';
import { MdDashboard, MdMessage } from 'react-icons/md'
import { AiFillFileText } from "react-icons/ai"
import { BsFillFilePersonFill, BsBuildingsFill, BsCapsule } from "react-icons/bs"
import { GoSettings} from "react-icons/go"
import { IoIosContacts } from "react-icons/io"




const SideNav = () => {
  return (
    <div className='sideBar'>

      <div className='Logo_Box'>
        <img src="../Images/medPharmLogo.png" alt="Logo" />
      </div>

      <div>
      <div className='bar_box'>
        <div className='bar_box2'>
          <div className='bar_box3'><MdDashboard/></div>
          <Link style={{textDecoration: "none", color:"inherit", marginBottom:"20px"}} to="/dashboard">DashBoard</Link>
        </div>
      </div>

      <div className='bar_box'>
        <div className='bar_box2'>
          <div className='bar_box3'><IoIosContacts/></div>
          <Link style={{textDecoration: "none", color:"inherit", marginBottom:"20px", width: "100%"}} to="/staff">Staff</Link>
        </div>
      </div>

      <div className='bar_box'>
        <div className='bar_box2'>
          <div className='bar_box3'><BsBuildingsFill/></div>
          <Link style={{textDecoration: "none", color:"inherit", marginBottom:"20px", width: "100%"}} to="/client">Client</Link>
        </div>
      </div>

      <div className='bar_box'>
        <div className='bar_box2'>
          <div className='bar_box3'><BsCapsule/></div>
          <Link style={{textDecoration: "none", color:"inherit", marginBottom:"20px", width: "100%"}} to="/drug">Drugs</Link>
        </div>
      </div>

      <div className='bar_box'>
        <div className='bar_box2'>
          <div className='bar_box3'><AiFillFileText/></div>
          <Link style={{textDecoration: "none", color:"inherit", marginBottom:"20px", width: "100%"}} to="/invent">Inventory</Link>
        </div>
      </div>

      <div className='bar_box'>
        <div className='bar_box2'>
          <div className='bar_box3'><BsFillFilePersonFill/></div>
          <Link style={{textDecoration: "none", color:"inherit", marginBottom:"20px", width: "100%"}} to="/sub">Subscription</Link>
        </div>
      </div>

      <div className='bar_box'>
        <div className='bar_box2'>
          <div className='bar_box3'><MdMessage/></div>
          <Link style={{textDecoration: "none", color:"inherit", marginBottom:"20px", width: "100%"}} to="/message">Message</Link>
        </div>
      </div>

      <div className='bar_box'>
        <div className='bar_box2'>
          <div className='bar_box3'><GoSettings/></div>
          <Link style={{textDecoration: "none", color:"inherit", marginBottom:"20px", width: "100%"}} to="/settings">Settings</Link>
        </div>
      </div>

      </div>
    </div> 
  )
}

export default SideNav