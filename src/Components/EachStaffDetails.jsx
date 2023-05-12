import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import SideNav from './SideNav'
import Header from './Header'
import { FaLongArrowAltLeft} from "react-icons/fa"
import { MdEdit } from "react-icons/md"


const EachStaffDetails = () => {
    const navigate = useNavigate()
    // let {state} = useLocation()
    // let my_data = location.state.data
    // console.log(state.data)

  return (
    <div className='dashBoard'>
        <SideNav />
        <div className='container'>
            <Header />
            <div className='eachStaffDetails'>
                <NavLink className='detailsBackIcon' onClick={()=>{navigate(-1)}}>
                    <p><FaLongArrowAltLeft /></p>
                    <p>back</p>
                </NavLink>
                
                <div>
                    <div className='leftDetails'>
                        <div className='ashBg'></div>
                        <div className='whiteBg'>
                            <div>
                                <h4>Kazeem Akila</h4>
                                <p>quadri1435@gmail.com</p>
                            </div>

                            <NavLink>
                                <MdEdit />
                                <p>Edit User</p>
                            </NavLink>

                            <div>
                                <p>Status</p>
                                <div>
                                    <p>green dot</p>
                                    <p>Active</p>
                                </div>
                            </div>

                            <button>Delete User</button>
                        </div>
                    </div>
                    <div className='rightDetails'>

                        <div className='detailsHeader'>
                            <h4>Staff Information</h4>
                            <div>
                                <p>mail icon</p>
                                <p>Send Message</p>
                            </div>
                        </div>

                        <div className='detailsContactInfo'>
                            <div className='detailsContactBox'>
                                <h3>Contact Info</h3>
                                <div>
                                    <div>
                                        <p>Mobile</p>
                                        <p>08066460845</p>
                                    </div>
                                    <div>
                                        <p>Address</p>
                                        <p>Alakufo Court</p>
                                    </div>
                                    <div>
                                        <p>Designation</p>
                                        <p>Secretary</p>
                                    </div>
                                    <div>
                                        <p>Gender</p>
                                        <p>Female</p>
                                    </div>
                                </div>
                            </div>

                            <div className='detailsWorkBox'>
                                <h3>Work Info</h3>
                                <div>
                                    <div>
                                        <p>Company Name</p>
                                        <p>AB Hospital</p>
                                    </div>
                                    <div>
                                        <p>Address</p>
                                        <p>Alakufo Court</p>
                                    </div>
                                    <div>
                                        <p>Office Contact</p>
                                        <p>Gbagi Market</p>
                                    </div>
                                    <div>
                                        <p>Category</p>
                                        <p>Pharmaceutical</p>
                                    </div>
                                </div>
                            </div>

                            <div className='detailsSubBox'>
                                <div>
                                    <h3>Work Info</h3>
                                    <div>
                                        <p>green icon</p>
                                        <p>Active</p>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <p>Subscription Plan</p>
                                        <p>Gold Plan</p>
                                    </div>
                                    <div>
                                        <p>Duration</p>
                                        <p>12 Months</p>
                                    </div>
                                    <div>
                                        <p>Start Date</p>
                                        <p>Jan, 2022</p>
                                    </div>
                                    <div>
                                        <p>End Date</p>
                                        <p>Dec, 2022</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default EachStaffDetails