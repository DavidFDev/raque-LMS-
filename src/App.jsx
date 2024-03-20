import './App.css'
import './Responsive.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Shop from './Pages/Shop'
import Home from './Pages/Home'
import PageNotFound from './Pages/404Page'
import Contact from './Pages/Contact'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
