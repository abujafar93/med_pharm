import React from 'react'
// import Header from './Header'
import "../StyleSheets/DashBoard.css"
import SideNav from './SideNav'
import Header from './Header'

const DashBoard = () => {
  return (
    <div className='dashBoard'>
        <SideNav />
        <div className='container'>
            <Header />

            <div className='dashDetails'>
                <div className='NoOfOrgRow'>
                    <div className='Org'>Num of Organisation</div>
                    <div className='TotInvent'>Total Inventory</div>
                    <div className='DrugCat'>Drug Category</div>
                    <div className='TotAmt'>Total Amount</div>
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