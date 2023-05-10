import React from 'react'
import BoardRate from './BoardRate'
import BoardHeader from './BoardHeader'
import OnBoardSideBar from './OnBoardSideBar'

const StaffOnBoarding3 = () => {
  return (
    <div className='staffOnBoard'>
        <div className='onBoardContainer'>
            <OnBoardSideBar />
            <div className='onBoard1'>
                <BoardHeader />
                <BoardRate />
            </div>
        </div>
    </div>
  )
}

export default StaffOnBoarding3