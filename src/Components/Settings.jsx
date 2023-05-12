import React from 'react'
import SideNav from './SideNav'
import Header from './Header'
import "../StyleSheets/Settings.css"
import { MdEdit } from "react-icons/md"
import { BsThreeDotsVertical } from "react-icons/bs"


const Settings = () => {
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
          <div className='client'>
          <div className='staff_list'>
                    <div className='table_filter_row'>
                        <div>
                            <h3>All Settings</h3>
                            {/* <input type="search" placeholder='Search staff' /> */}
                        </div>
                        <div className='table_filter'>
                            <p>Filter</p>
                            <button className='setBtn'>+    Add Parameters</button>
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

export default Settings