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

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='product/:id' element={<ProductDetails/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
