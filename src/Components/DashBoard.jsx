import React from 'react'
// import Header from './Header'
import "../StyleSheets/DashBoard.css"
import SideNav from './SideNav'
import Header from './Header'
import { AiFillFileText } from "react-icons/ai"
import { BsBuildingsFill, BsCapsule } from "react-icons/bs"


const DashBoard = () => {
  return (
    <div className='dashBoard'>
        <SideNav />
        <div className='container'>
            <Header />

            <div className='dashDetails'>

                <div className='NoOfOrgRow'>
                    <div className='NoOfOrg'>
                        <div className='OrgNum'>
                            <div className='org_icon'><BsBuildingsFill className='icon_color'/></div>
                            <div>
                                <p>Number of Organisations</p>
                                <h2>15</h2>
                            </div>
                        </div>
                    </div>

                    <div className='TotInvent'>
                        <div className='InventTot'>
                                <div className='invent_icon'><AiFillFileText className='icon_color'/></div>
                                <div>
                                    <p>Total Inventory</p>
                                    <h2>7,285</h2>
                                </div>
                        </div>
                    </div>

                    <div className='DrugCat'>
                        <div className='CatOfDrug'>
                            <div className='drug_icon'><BsCapsule className='icon_color'/></div>
                            <div>
                                <p>Drug Category</p>
                                <h2>9</h2>
                            </div>
                        </div>
                    </div>

                    <div className='TotAmt'>
                        <div className='AmountTotal'>
                            <div className='amount_icon'><BsCapsule className='icon_color'/></div>
                            <div>
                                <p>Drug Category</p>
                                <h2>9</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='MarketOverviewRow'>
                    <div className='market'>Market Overview</div>
                    <div className='drugHighDemand'>Drugs in High Demand</div> 
                </div>

                <div className='RecentActivitiesRow'>
                    <div className='Recent'>Recent activities</div>
                    <div className='drug-cat'>Drug Category</div>
                    <div className='topClient'>Top Clients</div>
                </div>
            </div>  
        </div>

    </div>     

)
}

export default DashBoard