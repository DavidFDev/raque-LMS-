import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CartProvider from './Context/CartContext.jsx'
import ProductProvider from './Context/ProductContext.jsx'


ReactDOM.createRoot(document.getElementById('Yctlibrary')).render(
  <ProductProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </ProductProvider>
)
