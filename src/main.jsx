import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CartProvider from './Context/CartContext.jsx'
import ProductProvider from './Context/ProductContext.jsx'
import AuthProvider from './Context/AuthContext.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('raque')).render(
  <ProductProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </ProductProvider>
)
