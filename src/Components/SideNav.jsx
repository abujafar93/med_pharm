import React from 'react';
import {NavLink} from 'react-router-dom';
import { MdDashboard, MdMessage } from 'react-icons/md'
import { AiFillFileText } from "react-icons/ai"
import { BsFillFilePersonFill, BsBuildingsFill, BsCapsule } from "react-icons/bs"
import { GoSettings} from "react-icons/go"
import { IoIosContacts } from "react-icons/io"
import Logo from "../Images/medPharmLogo.png"




const SideNav = () => {
  return (
    <div className='sideBar'>
      <div className='Logo_Box'>
        <img src={Logo} alt="Logo" />
      </div>

      <div>
        <NavLink style={({isActive})=>({
          background: isActive ? "rgba(0, 183, 255, 0.08)" : "inherit",
          color: isActive ? "#00B5FF" : "inherit",
          fontWeight: isActive ? 600 : "inherit"
        })} to="/" className='bar_box'>
          <div className='bar_box2'>
            <div className='bar_box3'><MdDashboard/></div>
            <p>DashBoard</p>
          </div>
        </NavLink>

        <NavLink style={({isActive})=>({
          background: isActive ? "rgba(0, 183, 255, 0.08)" : "inherit",
          color: isActive ? "#00B5FF" : "inherit",
          fontWeight: isActive ? 600 : "inherit"
        })} to="/staff" className='bar_box'>
          <div className='bar_box2'>
            <div className='bar_box3'><IoIosContacts/></div>
            <p>Staff</p>
          </div>
        </NavLink>

        <NavLink style={({isActive})=>({
          background: isActive ? "rgba(0, 183, 255, 0.08)" : "inherit",
          color: isActive ? "#00B5FF" : "inherit",
          fontWeight: isActive ? 600 : "inherit"
        })} to="/client" className='bar_box'>
          <div className='bar_box2'>
            <div className='bar_box3'><BsBuildingsFill/></div>
            <p>Client</p>
          </div>
        </NavLink>

        <NavLink style={({isActive})=>({
          background: isActive ? "rgba(0, 183, 255, 0.08)" : "inherit",
          color: isActive ? "#00B5FF" : "inherit",
          fontWeight: isActive ? 600 : "inherit"
        })} to="/drug"  className='bar_box'>
          <div className='bar_box2'>
            <div className='bar_box3'><BsCapsule/></div>
            <p>Drugs</p>
          </div>
        </NavLink>

        <NavLink style={({isActive})=>({
          background: isActive ? "rgba(0, 183, 255, 0.08)" : "inherit",
          color: isActive ? "#00B5FF" : "inherit",
          fontWeight: isActive ? 600 : "inherit"
        })} to="/invent" className='bar_box'>
          <div className='bar_box2'>
            <div className='bar_box3'><AiFillFileText/></div>
            <p>Inventory</p>
          </div>
        </NavLink>

        <NavLink style={({isActive})=>({
          background: isActive ? "rgba(0, 183, 255, 0.08)" : "inherit",
          color: isActive ? "#00B5FF" : "inherit",
          fontWeight: isActive ? 600 : "inherit"
        })} to="/sub" className='bar_box'>
          <div className='bar_box2'>
            <div className='bar_box3'><BsFillFilePersonFill/></div>
            <p>Subscription</p>
          </div>
        </NavLink>

        <NavLink style={({isActive})=>({
          background: isActive ? "rgba(0, 183, 255, 0.08)" : "inherit",
          color: isActive ? "#00B5FF" : "inherit",
          fontWeight: isActive ? 600 : "inherit"
        })} to="/message" className='bar_box'>
          <div className='bar_box2'>
            <div className='bar_box3'><MdMessage/></div>
            <p>Message</p>
          </div>
        </NavLink>

        <NavLink style={({isActive})=>({
          background: isActive ? "rgba(0, 183, 255, 0.08)" : "inherit",
          color: isActive ? "#00B5FF" : "inherit",
          fontWeight: isActive ? 600 : "inherit"
        })} to="/settings" className='bar_box'>
          <div className='bar_box2'>
            <div className='bar_box3'><GoSettings/></div>
            <p>Settings</p>
          </div>
        </NavLink>
      </div>
    </div> 
  )
}

export default SideNav