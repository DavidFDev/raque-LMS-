import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import USFlag from "../assets/Flags/us-flag.jpg"
import Navbar from './Navbar'
const Layout = () => {
  const [selectedName, setSelectedName] = useState("Eng")
  const [selectedFlag, setSelectedFlag] = useState(USFlag)
  return (
    <div>
        <Header/>
        <Navbar selectedName={selectedName} setSelectedName={setSelectedName} selectedFlag={selectedFlag} setSelectedFlag={setSelectedFlag} />
        <Outlet/>
        <Footer />
    </div>
  )
}

export default Layout