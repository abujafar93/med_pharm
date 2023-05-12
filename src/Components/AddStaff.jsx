import React from 'react'
import OnBoardSideBar from './OnBoardSideBar'
import logInBg from "../Images/logInBg.jpg"
import { FaLongArrowAltLeft} from "react-icons/fa"
import { NavLink, useNavigate } from 'react-router-dom'


const AddStaff = () => {
    const navigate = useNavigate()

    return (
        <div className='staffOnBoard'>
            <div  className='onBoardContainer'>
                <OnBoardSideBar />
                <div className='addStaff'>
                    <div className='addStaffContainer'>
                        <div  className='addUserTitle'>
                                <NavLink className='backIconBox' onClick={()=>{navigate(-1)}}>
                                    <p><FaLongArrowAltLeft /></p>
                                    <p>back</p>
                                </NavLink>
                                <div>
                                    <h4>Add Staff</h4>
                                    <p>Staff Information Preview</p>
                                </div>
                        </div>

                        <div  className='staff_details'>
                                <img src={logInBg} />
                                <div className='staffInputS'>
                                    <div className='eachInputBox'>
                                        <div>
                                            <p>First Name</p>
                                            <p className='theInputedData'>Ikechhukwu</p>
                                        </div>
                                        <div>
                                            <p>Personal Address</p>
                                            <p className='theInputedData'>ike_usman@gmail.com</p>
                                        </div>
                                        <div>
                                            <p>Assign Work Email</p>
                                            <p className='theInputedData'>ike_usman@gmail.com</p>
                                        </div>
                                        <div>
                                            <p>User Type</p>
                                            <p className='theInputedData'>Marketer</p>
                                        </div>
                                    </div>
                                    <div className='eachInputBox'>
                                        <div>
                                            <p>Last Name</p>
                                            <p className='theInputedData'>Usman</p>
                                        </div>
                                        <div>
                                            <p>Phone Number</p>
                                            <p className='theInputedData'>080123456789</p>
                                        </div>
                                        <div>
                                            <p>Default Password</p>
                                            <p className='theInputedData'>ikechukwuusman</p>
                                        </div>
                                        <div>
                                            <p>Gender</p>
                                            <p className='theInputedData'>Male</p>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        <div className='AddUserBtnBox'>
                                <button className='addUserBtn' onClick={()=>{navigate("/profilingStaff")}}>Add User</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default AddStaff