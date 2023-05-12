import React, { useState } from 'react'
import "../StyleSheets/Staff.css"
import { MdDashboard, } from "react-icons/md";
import SideNav from './SideNav';
import { HiUsers} from "react-icons/hi"
import { RiUserFollowFill } from "react-icons/ri"
import { MdEdit } from "react-icons/md"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaUserAlt } from "react-icons/fa"
import Header from './Header';
import Pagination from '../Pagination/paginate';
import { NavLink, useNavigate } from 'react-router-dom';

const Staff = () => {
   let my_datas = [
        {
            id: <input type='checkbox'/>,
            name: 'Kazeem Akio',
            designation: 'Secretary',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Status',
            actions: <span><MdEdit style={{marginRight:"5px", width:"24px", height:"24px", color:"#9EA0A5"}} /><BsThreeDotsVertical style={{marginLeft:"5px", width:"24px", height:"24px", color:"#9EA0A5"}}/></span>
        },
        {
            id: <input type='checkbox'/>,
            name: 'Lekan Alao',
            designation: 'Admin',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Suspected',
            actions: <span><MdEdit style={{marginRight:"5px", width:"24px", height:"24px", color:"#9EA0A5"}} /><BsThreeDotsVertical style={{marginLeft:"5px", width:"24px", height:"24px", color:"#9EA0A5"}}/></span>        },
        {
            id: <input type='checkbox'/>,
            name: 'Wale Adenuga',
            designation: 'Clerk',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Deleted',
            actions: <span><MdEdit style={{marginRight:"5px", width:"24px", height:"24px", color:"#9EA0A5"}} /><BsThreeDotsVertical style={{marginLeft:"5px", width:"24px", height:"24px", color:"#9EA0A5"}}/></span>        },
        {
            id: <input type='checkbox'/>,
            name: 'Aliko Dangote',
            designation: 'Store Keeper',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Status',
            actions: <span><MdEdit style={{marginRight:"5px", width:"24px", height:"24px", color:"#9EA0A5"}} /><BsThreeDotsVertical style={{marginLeft:"5px", width:"24px", height:"24px", color:"#9EA0A5"}}/></span>        },
        {
            id: <input type='checkbox'/>,
            name: 'Ishola Ibrahim',
            designation: 'Admin',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Suspended',
            actions: <span><MdEdit style={{marginRight:"5px", width:"24px", height:"24px", color:"#9EA0A5"}} /><BsThreeDotsVertical style={{marginLeft:"5px", width:"24px", height:"24px", color:"#9EA0A5"}}/></span>        },
        {
            id: <input type='checkbox'/>,
            name: 'Basit Imraan',
            designation: 'Clerk',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Status',
            actions: <span><MdEdit style={{marginRight:"5px", width:"24px", height:"24px", color:"#9EA0A5"}} /><BsThreeDotsVertical style={{marginLeft:"5px", width:"24px", height:"24px", color:"#9EA0A5"}}/></span>        },
        {
            id: <input type='checkbox'/>,
            name: 'Adeleke Maryam',
            designation: 'Admin',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Deleted',
            actions: <span><MdEdit style={{marginRight:"5px", width:"24px", height:"24px", color:"#9EA0A5"}} /><BsThreeDotsVertical style={{marginLeft:"5px", width:"24px", height:"24px", color:"#9EA0A5"}}/></span>        },
        {
            id: <input type='checkbox'/>,
            name: 'Kazeem Jimoh',
            designation: 'Secretary',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Status',
            actions: <span><MdEdit style={{marginRight:"5px", width:"24px", height:"24px", color:"#9EA0A5"}} /><BsThreeDotsVertical style={{marginLeft:"5px", width:"24px", height:"24px", color:"#9EA0A5"}}/></span>        },
        {
            id: <input type='checkbox'/>,
            name: 'Raymond Akio',
            designation: 'Store Keeper',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Status',
            actions: <span><MdEdit style={{marginRight:"5px", width:"24px", height:"24px", color:"#9EA0A5"}} /><BsThreeDotsVertical style={{marginLeft:"5px", width:"24px", height:"24px", color:"#9EA0A5"}}/></span>        },
        {
            id: <input type='checkbox'/>,
            name: 'Kazeem Akio',
            designation: 'Secretary',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Status',
            actions: <span><MdEdit style={{marginRight:"5px", width:"24px", height:"24px", color:"#9EA0A5"}} /><BsThreeDotsVertical style={{marginLeft:"5px", width:"24px", height:"24px", color:"#9EA0A5"}}/></span>        },
        {
            id: <input type='checkbox'/>,
            name: 'Kazeem Akio',
            designation: 'Secretary',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Status',
            actions: <span><MdEdit style={{marginRight:"5px"}} /><BsThreeDotsVertical /></span>
        },
        {
            id: <input type='checkbox'/>,
            name: 'Lekan Alao',
            designation: 'Admin',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Suspected',
            actions: <span><MdEdit style={{marginRight:"5px"}} /><BsThreeDotsVertical /></span>
        },
        {
            id: <input type='checkbox'/>,
            name: 'Wale Adenuga',
            designation: 'Clerk',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Deleted',
            actions: <span><MdEdit style={{marginRight:"5px"}} /><BsThreeDotsVertical /></span>
        },
        {
            id: <input type='checkbox'/>,
            name: 'Aliko Dangote',
            designation: 'Store Keeper',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Status',
            actions: <span><MdEdit style={{marginRight:"5px"}} /><BsThreeDotsVertical /></span>
        },
        {
            id: <input type='checkbox'/>,
            name: 'Ishola Ibrahim',
            designation: 'Admin',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Suspended',
            actions: <span><MdEdit style={{marginRight:"5px"}} /><BsThreeDotsVertical /></span>
        },
        {
            id: <input type='checkbox'/>,
            name: 'Basit Imraan',
            designation: 'Clerk',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Status',
            actions: <span><MdEdit style={{marginRight:"5px"}} /><BsThreeDotsVertical /></span>
        },
        {
            id: <input type='checkbox'/>,
            name: 'Adeleke Maryam',
            designation: 'Admin',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Deleted',
            actions: <span><MdEdit style={{marginRight:"5px"}} /><BsThreeDotsVertical /></span>
        },
        {
            id: <input type='checkbox'/>,
            name: 'Kazeem Jimoh',
            designation: 'Secretary',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Status',
            actions: <span><MdEdit style={{marginRight:"5px"}} /><BsThreeDotsVertical /></span>
        },
        {
            id: <input type='checkbox'/>,
            name: 'Raymond Akio',
            designation: 'Store Keeper',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Status',
            actions: <span><MdEdit style={{marginRight:"5px"}} /><BsThreeDotsVertical /></span>
        },
        {
            id: <input type='checkbox'/>,
            name: 'Kazeem Akio',
            designation: 'Secretary',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Status',
            actions: <span><MdEdit style={{marginRight:"5px"}} /><BsThreeDotsVertical /></span>
        },
        {
            id: <input type='checkbox'/>,
            name: 'Kazeem Akio',
            designation: 'Secretary',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Status',
            actions: <span><MdEdit style={{marginRight:"5px"}} /><BsThreeDotsVertical /></span>
        },
        {
            id: <input type='checkbox'/>,
            name: 'Lekan Alao',
            designation: 'Admin',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Suspected',
            actions: <span><MdEdit style={{marginRight:"5px"}} /><BsThreeDotsVertical /></span>
        },
        {
            id: <input type='checkbox'/>,
            name: 'Wale Adenuga',
            designation: 'Clerk',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Deleted',
            actions: <span><MdEdit style={{marginRight:"5px"}} /><BsThreeDotsVertical /></span>
        },
        {
            id: <input type='checkbox'/>,
            name: 'Aliko Dangote',
            designation: 'Store Keeper',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Status',
            actions: <span><MdEdit style={{marginRight:"5px"}} /><BsThreeDotsVertical /></span>
        },
        {
            id: <input type='checkbox'/>,
            name: 'Ishola Ibrahim',
            designation: 'Admin',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Suspended',
            actions: 'pen icon'
        },
        {
            id: <input type='checkbox'/>,
            name: 'Basit Imraan',
            designation: 'Clerk',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Status',
            actions: 'pen icon'
        },
        {
            id: <input type='checkbox'/>,
            name: 'Adeleke Maryam',
            designation: 'Admin',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Deleted',
            actions: 'pen icon'
        },
        {
            id: <input type='checkbox'/>,
            name: 'Kazeem Jimoh',
            designation: 'Secretary',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Status',
            actions: 'pen icon'
        },
        {
            id: <input type='checkbox'/>,
            name: 'Raymond Akio',
            designation: 'Store Keeper',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Status',
            actions: 'pen icon'
        },
        {
            id: <input type='checkbox'/>,
            name: 'Kazeem Akio',
            designation: 'Secretary',
            mobile: '+2348066460845',
            email: 'quadri1435@gmail.com',
            address: 'Plot 6, Orogun Ojoo Ibadan',
            date: '10/11/2021',
            Status: 'Status',
            actions: 'pen icon'
        }
    ]

    const navigate = useNavigate()
    const [pageNum, setPageNum] = useState(0);

    const toEachStaffDetails =()=>{
        navigate('/eachStaffDetails', {state: {data: my_datas}});
    }

    const usersPerPage = 10;
    const pageVisited = pageNum * usersPerPage;
    const handlePageClick = ({ selected }) => {
      setPageNum(selected);
    };

    const pageCount = Math.ceil(my_datas.length / usersPerPage);

  return (
    <div className='dashBoard'>

        <SideNav />

        <div className='container'>
            <Header />
            <div className='staff'>
                <div className='head_box'>
                    <div className='total_staff'>
                        <div className='total_staff_icon'><HiUsers className='icon_color'/></div>
                        <div>
                            <p>Total Staff</p>
                            <h2>17</h2>
                        </div>
                    </div>

                    <div className='admin'>
                        <div className='admin_icon'><RiUserFollowFill className='icon_color' /></div>
                        <div>
                            <p>Administrators</p>
                            <h2>3</h2>
                        </div>
                    </div>

                    <div className='other_roles'>
                        <div className='roles_icon'><FaUserAlt className='icon_color' /></div>
                        <div>
                            <p>Other Roles</p>
                            <h2>14</h2>
                        </div>
                    </div>
                </div>

                <div className='staff_list'>
                    <div className='table_filter_row'>
                        <div className='table_search'>
                            <h3>Staff</h3>
                            <input type="search" placeholder='Search staff' />
                        </div>
                        <div className='table_filter'>
                            <p>Filter</p>
                            <button className='btn' onClick={()=>{navigate("/staffOnBoarding1")}}>+    Add Staff</button>
                        </div>
                    </div>

                    <div>
                        <table>
                            <tr>
                                <th><input type='checkbox' style={{marginLeft:'10px'}} /></th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                            {
                            my_datas
                            .slice(pageVisited, pageVisited + usersPerPage)
                            .map((data)=>{
                                return(
                                    <tr onClick={toEachStaffDetails}>
                                            <td><input type='checkbox' style={{marginLeft:'10px'}} /></td>
                                            <td>{data.name}</td>
                                            <td>{data.designation}</td>
                                            <td>{data.mobile}</td>
                                            <td>{data.email}</td>
                                            <td>{data.address}</td>
                                            <td>{data.date}</td>
                                            <td>{data.Status}</td>
                                            <td>{data.actions}</td>
                                    </tr>

                                )
                            })
                            }
                        </table>
                        <div className="PaginationDetails">
                        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
                          </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Staff