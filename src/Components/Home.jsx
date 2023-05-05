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

const Home = () => {
  return (
    <>
    <Routes>
			<Route path="/dashboard" element={<DashBoard />}/>
			<Route path="/staff" element={<Staff />}/>
            <Route path='/client' element={<Client />}/>
			<Route path='/drug' element={<Drugs />}/>
			<Route path='/invent' element={<Inventory />}/>
			<Route path='/sub' element={<Subscription />}/>
			<Route path='/message' element={<Message />}/>
			<Route path='/settings' element={<Settings />}/>
		</Routes>
    </>
  )
}

export default Home