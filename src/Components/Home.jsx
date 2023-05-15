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
import AddStaff from './AddStaff'
import ProfilingStaff from './ProfilingStaff'
import OnboardingSuccess from './OnboardingSuccess'
import EachStaffDetails from './EachStaffDetails'
import LogIn from './LogIn'


const Home = () => {
  return (
    <>
	    <Routes>
			<Route path="/" element={<LogIn />}/>
			<Route exact path="dashboard" element={<DashBoard />}/>
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
			<Route exact path='/addStaff' element={<AddStaff />}/>
			<Route exact path='/profilingStaff' element={<ProfilingStaff />} />
			<Route exact path='/onBoardingSuccess' element={<OnboardingSuccess />}/>
			<Route exact path='/eachStaffDetails' element={<EachStaffDetails />}/>
		</Routes>
    </>
  )
}

export default Home