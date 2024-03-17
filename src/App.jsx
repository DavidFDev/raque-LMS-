import { useState } from 'react'
import './App.css'
import './Responsive.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Shop from './Pages/Shop'
import Home from './Pages/Home'
import PageNotFound from './Pages/404Page'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
