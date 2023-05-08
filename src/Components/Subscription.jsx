import React from 'react'
import SideNav from './SideNav'
import Header from './Header'
import "../StyleSheets/Subscription.css"
import { AiFillFileText } from "react-icons/ai"
import { BsBuildingsFill, BsCapsule } from "react-icons/bs"


const Subscription = () => {
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
          <div className='NoOfOrgRow'>
                    <div className='NoOfOrg'>
                        <div className='OrgNum'>
                            <div className='org_icon'><BsBuildingsFill className='icon_color'/></div>
                            <div>
                                <p>Total Subscription</p>
                                <h2>53</h2>
                            </div>
                        </div>
                    </div>

                    <div className='TotInvent'>
                        <div className='InventTot'>
                                <div className='invent_icon'><AiFillFileText className='icon_color'/></div>
                                <div>
                                    <p>Hospitals Subscribed</p>
                                    <h2>40</h2>
                                </div>
                        </div>
                    </div>

                    <div className='DrugCat'>
                        <div className='CatOfDrug'>
                            <div className='drug_icon'><BsCapsule className='icon_color'/></div>
                            <div>
                                <p>Pharmacy Subscribed</p>
                                <h2>10</h2>
                            </div>
                        </div>
                    </div>

                    <div className='TotAmt'>
                        <div className='AmountTotal'>
                            <div className='drug_icon'><BsCapsule className='icon_color'/></div>
                            <div>
                                <p>Other Subscription</p>
                                <h2>3</h2>
                            </div>
                        </div>
                    </div>
          </div>

                <div className='staff_list'>
                    <div className='table_filter_row'>
                        <div className='table_search'>
                            <h3>All Subscription</h3>
                            <input type="search" placeholder='Search subscription' />
                        </div>
                        <div className='table_filter'>
                            <p>Filter</p>
                            <button>+    Create Subscription</button>
                        </div>
                    </div>

                    <div>
                        <table>
                            <tr>
                                <th><input type='checkbox'/></th>
                                <th>Name</th>
                                <th>Product I.D</th>
                                <th>Category</th>
                                <th>Treatment for</th>
                                <th>Quantity</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                            {
                            my_datas.map((data)=>{
                                return(
                                    <tr>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.designation}</td>
                                        <td>{data.mobile}</td>
                                        <td>{data.email}</td>
                                        <td>{data.address}</td>
                                        <td>{data.Status}</td>
                                        <td>{data.actions}</td>
                                    </tr>

                                )
                            })
                            }
                        </table>
                    </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Subscription