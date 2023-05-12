import React from 'react'
import OnBoardSideBar from './OnBoardSideBar'
import { useNavigate } from 'react-router-dom'
import { IoIosCheckmarkCircleOutline } from "react-icons/io"

const OnboardingSuccess = () => {
  const navigate = useNavigate()
  
  return (
    <div className='staffOnBoard'>
      <div className='onBoardContainer'>
        <OnBoardSideBar />
        <div className='onBoard1'>
          <div className='onBoardingSuccess'>
            <div className='OnBoardinSuccessContainer'>
              <div className='success_info'>
                <div className='sInfo'>
                  <div>Success Message</div>
                  <button className='cancel_icon'>X</button>
                </div>
              </div>

              <div className='successIconBox'>
                <div className='successIcon'><IoIosCheckmarkCircleOutline style={{width: "42.19px", height: "42.19px"}} /></div>
                <div>Onboarding Successful!</div>
              </div>

              <div>
                <div>You have added <span>Caperry Signature</span>as a Client.</div>
                <div>A mail will be forwarded to the company for password reset</div>
              </div>

            <div className='SuccessFinalise'>
                <h4>OK</h4>
                <button style={{color: "#C4C4C4", textDecoration:"none"}} onClick={()=>{navigate("/staffOnBoarding1")}}>Add another User?</button>
            </div>              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnboardingSuccess