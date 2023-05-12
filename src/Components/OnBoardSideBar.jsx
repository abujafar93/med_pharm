import React from 'react'
import { BsBorder } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import Logo from "../Images/medPharmLogo.png"

const OnBoardSideBar = () => {
  return (
    <div className='OnBoardSideBar'>
    <img src={Logo} className='logo' />
    <div className='sideBarList'>
        <NavLink style={({isActive})=>({
          color: isActive ? "#00B5FF" : "inherit",
        })} className='eachItemList' to="/staffOnBoarding1">
            <div className='numbering'>1</div>
            <p>Personal Details</p>        
        </NavLink>

        <NavLink style={({isActive})=>({
          color: isActive ? "#00B5FF" : "inherit",
        })} className='eachItemList' to="/staffOnBoarding2">
            <div className='numbering'>2</div>
            <p>Email Setup</p>
        </NavLink>

        <NavLink style={({isActive})=>({
          color: isActive ? "#00B5FF" : "inherit",
        })} className='eachItemList' to="/staffOnBoarding3">
            <div className='numbering'>3</div>
            <p>Rates & Privileges</p>
        </NavLink>
    </div>
</div>
  )
}

export default OnBoardSideBar