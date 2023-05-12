import React from 'react'
import SideNav from './SideNav'
import "../StyleSheets/Inventory.css"
import { AiFillFileText } from "react-icons/ai"
import { BsBuildingsFill, BsCapsule } from "react-icons/bs"
import Header from './Header';
import "../StyleSheets/Hospital.css"
import { MdEdit } from "react-icons/md"
import { BsThreeDotsVertical } from "react-icons/bs"

const Inventory = () => {
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
          <div className='inventory'>
          <div className='NoOfOrgRow'>
                    <div className='NoOfOrg'>
                        <div className='OrgNum'>
                            <div className='org_icon'><BsBuildingsFill className='icon_color'/></div>
                            <div>
                                <p>Total Drugs</p>
                                <h2>27,000</h2>
                            </div>
                        </div>
                    </div>

                    <div className='TotInvent'>
                        <div className='InventTot'>
                                <div className='invent_icon'><AiFillFileText className='icon_color'/></div>
                                <div>
                                    <p>Available Drugs</p>
                                    <h2>10,000</h2>
                                </div>
                        </div>
                    </div>

                    <div className='DrugCat'>
                        <div className='CatOfDrug'>
                            <div className='drug_icon'><BsCapsule className='icon_color'/></div>
                            <div>
                                <p>Not available</p>
                                <h2>15,000</h2>
                            </div>
                        </div>
                    </div>

                    <div className='TotAmt'>
                        <div className='AmountTotal'>
                            <div className='drug_icon'><BsCapsule className='icon_color'/></div>
                            <div>
                                <p>Expiry Date</p>
                                <h2>2,000</h2>
                            </div>
                        </div>
                    </div>
          </div>

                <div className='staff_list'>
                    <div className='table_filter_row'>
                        <div className='table_search'>
                            <h3>All Inventory</h3>
                            <input type="search" placeholder='Search inventory' />
                        </div>
                        <div className='table_filter'>
                            <p>Filter</p>
                            <button className='inventBtn'>+    Create Inventory</button>
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

export default Inventory