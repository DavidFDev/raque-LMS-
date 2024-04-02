import './App.css'
import './Responsive.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Shop from './Pages/Shop'
import Home from './Pages/Home'
import PageNotFound from './Pages/404Page'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart/Cart'
import ProductDetails from './Pages/ProductDetails'
import Login from "./Pages/User/User-Entry/Login"
import SignUp from "./Pages/User/User-Entry/SignUp"
import Profile from './Pages/UserProfile/Profile'
import { LoginContext } from './Context/LoginContext'
import { useState } from 'react'
import UserAccount from './Pages/User/User-Entry/UserAccount'
import { Suspense } from 'react'
import Loading from './Components/Loading'
import Pricing from './Pages/Pricing'

const App = () => {
  // const [userEmail, setUserEmail] = useState();
  // const [isFuntioning, setIsFunctioning] = useState(false)

  return (
    <div className=''>
        <Suspense fallback={<Loading/>}>
          <Router>
              <Routes>
                
                {/* ENTRY PAGES */}

                {/* <LoginContext.Provider value={{userEmail, setUserEmail, isFuntioning, setIsFunctioning}}> */}
                  <Route path='login' element={<Login/>} />
                  <Route path='register' element={<SignUp/>} />
                {/* </LoginContext.Provider> */}
                
                {/* END OF ENTRY PAGES */}

                <Route path='/' element={<Layout/>}>
                  <Route path='profile' element={<Profile/>}/>
                  <Route index element={<Home/>}/>
                  <Route path='shop' element={<Shop/>}/>
                  <Route path='product/:id' element={<ProductDetails/>}/>
                  <Route path='cart' element={<Cart/>}/>
                  <Route path='pricing' element={<Pricing/>}/>
                  <Route path='contact' element={<Contact/>}/>
                  <Route path='*' element={<PageNotFound/>}/>
                  <Route path='account' element={<UserAccount/>} />
                </Route>


              </Routes>

          </Router>
        </Suspense>
    </div>
  )
}

export default App
