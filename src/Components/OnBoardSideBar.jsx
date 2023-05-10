import React from 'react'
import { Link } from 'react-router-dom'

const OnBoardSideBar = () => {
  return (
    <div className='OnBoardSideBar'>
    <div className='logo'>MEDIPHARM</div>
    <div className='sideBarList'>
        <Link className='eachItemList' to="/staffOnBoarding1">
            <div className='numbering'>1</div>
            <p>Personal Details</p>        
        </Link>
        <Link className='eachItemList' to="/staffOnBoarding2">
            <div className='numbering'>2</div>
            <p>Email Setup</p>
        </Link>
        <Link className='eachItemList' to="/staffOnBoarding3">
            <div className='numbering'>3</div>
            <p>Rates & Privileges</p>
        </Link>
    </div>
</div>
  )
}

export default OnBoardSideBar