import React from 'react'
import "../StyleSheets/StaffOnBoard.css"
import OnBoardSideBar from './OnBoardSideBar'
import BoardHeader from './BoardHeader'
import BoardDetail from './BoardDetail'
import { useNavigate } from 'react-router-dom'

const StaffOnBoarding1 = () => {
  const navigate = useNavigate()
  return (
    <div className='staffOnBoard'>
        <div className='onBoardContainer'>
            <OnBoardSideBar />
            <div className='onBoard1'>
                <BoardHeader />
                <BoardDetail />
                <div className='onBoardBtns'>
                  <button className='btn1'>Cancel</button>
                  <button className='btn2'onClick={()=>{navigate("/staffOnBoarding2")}} >Next</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StaffOnBoarding1