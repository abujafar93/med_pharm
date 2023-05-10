import React from 'react'
import BoardHeader from './BoardHeader'
import BaordEmail from './BaordEmail'
import OnBoardSideBar from './OnBoardSideBar'
import { useNavigate } from 'react-router-dom'

const StaffOnBoarding2 = () => {
    const navigate = useNavigate()

  return (
    <div className='staffOnBoard'>
        <div className='onBoardContainer'>
            <OnBoardSideBar />
            <div className='onBoard1'>
                <BoardHeader />
                <BaordEmail />
                <div className='emailBtn'>
                    <button onClick={()=>{navigate("/staffOnBoarding3")}}>Next</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StaffOnBoarding2