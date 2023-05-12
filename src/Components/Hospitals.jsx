import React from 'react'
import SideNav from './SideNav';
import { HiUsers} from "react-icons/hi"
import { RiUserFollowFill } from "react-icons/ri"
import { FaUserAlt } from "react-icons/fa"
import { MdEdit } from "react-icons/md"
import { BsThreeDotsVertical } from "react-icons/bs"
import Header from './Header';
import "../StyleSheets/Hospital.css"

const Hospitals = () => {
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
        }
    ]

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
                            <p>All Organisations</p>
                            <h2>17</h2>
                        </div>
                    </div>

                    <div className='HosOrgCat'>
                        <div className='row1'>
                            <div className='admin_icon'><RiUserFollowFill className='icon_color' /></div>
                                <p>Organisations Category</p>
                                <h2>3</h2>
                        </div>

                        <div className='row2'>
                            <div>
                                <p>Hospitals</p>
                                <h4>35</h4>
                            </div>
                            <div>
                                <p>Pharmacy</p>
                                <h4>70</h4>
                            </div>
                            <div>
                                <p>Others</p>
                                <h4>21</h4>
                            </div>
                        </div>


                    </div>

                    <div className='other_roles'>
                        <div className='roles_icon'><FaUserAlt className='icon_color' /></div>
                        <div>
                            <p>Top Organisations</p>
                            <h2>14</h2>
                        </div>
                    </div>
                </div>

                <div className='staff_list'>
                    <div className='table_filter_row'>
                        <div className='table_search'>
                            <h3>Hospitals</h3>
                            <input type="search" placeholder='Search Organisation' />
                        </div>
                        <div className='table_filter'>
                            <p>Filter</p>
                            <button className='HosBtn'>+    Add Hospital</button>
                        </div>
                    </div>

                    <div>
                        <table>
                            <tr>
                                <th><input type='checkbox'/></th>
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
                            // .slice(pageVisited, pageVisited + usersPerPage)
                            .map((data)=>{
                                return(
                                    <tr>
                                        <td>{data.id}</td>
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
                        {/* <div className="PaginationDetails">
                        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
                          </div> */}
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hospitals