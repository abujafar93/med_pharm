import React from 'react'
import {Routes, Route} from "react-router-dom"
import Header from './Header'
import DashBoard from './DashBoard'
import SideNav from './SideNav'
import Staff from './Staff'
import Client from './Client'
import Drugs from './Drugs'
import Inventory from './Inventory'
import Subscription from './Subscription'
import Message from './Message'
import Settings from './Settings'
import Hospitals from './Hospitals'
import Pharmacy from './Pharmacy'
import OtherClients from './OtherClients'
import StaffOnBoarding1 from './StaffOnBoarding1'
import StaffOnBoarding2 from './StaffOnBoarding2'
import StaffOnBoarding3 from './StaffOnBoarding3'

const Home = () => {
  return (
    <>
    <Routes>
			<Route path="/" element={<DashBoard />}/>
			<Route path="/staff" element={<Staff />}/>
            <Route path='/client' element={<OtherClients />}/>
			<Route path='/drug' element={<Drugs />}/>
			<Route path='/invent' element={<Inventory />}/>
			<Route path='/sub' element={<Subscription />}/>
			<Route path='/message' element={<Message />}/>
			<Route path='/settings' element={<Settings />}/>
			<Route exact path="/staffOnBoarding1" element={<StaffOnBoarding1/>} />
			<Route exact path='/staffOnBoarding2' element={<StaffOnBoarding2 />} />
			<Route exact path='/staffOnBoarding3' element={<StaffOnBoarding3 />}/>
		</Routes>
    </>
  )
}

export default Home