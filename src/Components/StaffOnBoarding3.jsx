import React from 'react'
import BoardRate from './BoardRate'
import BoardHeader from './BoardHeader'
import OnBoardSideBar from './OnBoardSideBar'
import { useNavigate } from 'react-router-dom'

const StaffOnBoarding3 = () => {
  const navigate = useNavigate()

  return (
    <div className='staffOnBoard'>
        <div className='onBoardContainer'>
            <OnBoardSideBar />
            <div className='onBoard1'>
                <BoardHeader />
                <BoardRate />
                <div>
                  <button className='rolesBtn' onClick={()=>{navigate("/addStaff")}}>Preview</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StaffOnBoarding3