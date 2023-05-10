import React from 'react'
import SideNav from './SideNav'
import Header from './Header'
import "../StyleSheets/Settings.css"


const Settings = () => {
  let my_datas = [
    {
        id: 1,
        name: 'Kazeem Akio',
        designation: 'Secretary',
        mobile: '+2348066460845',
        email: 'quadri1435@gmail.com',
        address: 'Plot 6, Orogun Ojoo Ibadan',
        date: '10/11/2021',
        Status: 'Status',
        actions: 'pen icon'
    },
    {
        id: 2,
        name: 'Lekan Alao',
        designation: 'Admin',
        mobile: '+2348066460845',
        email: 'quadri1435@gmail.com',
        address: 'Plot 6, Orogun Ojoo Ibadan',
        date: '10/11/2021',
        Status: 'Suspected',
        actions: 'pen icon'
    },
    {
        id: 3,
        name: 'Wale Adenuga',
        designation: 'Clerk',
        mobile: '+2348066460845',
        email: 'quadri1435@gmail.com',
        address: 'Plot 6, Orogun Ojoo Ibadan',
        date: '10/11/2021',
        Status: 'Deleted',
        actions: 'pen icon'
    },
    {
        id: 4,
        name: 'Aliko Dangote',
        designation: 'Store Keeper',
        mobile: '+2348066460845',
        email: 'quadri1435@gmail.com',
        address: 'Plot 6, Orogun Ojoo Ibadan',
        date: '10/11/2021',
        Status: 'Status',
        actions: 'pen icon'
    },
    {
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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