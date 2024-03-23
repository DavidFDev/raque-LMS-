import React from 'react'
import { Link } from 'react-router-dom';


const Cart = () => {

  return (
    <div className='cart-page'>
        <section className="cart page-title-area">
            <div className="container p-0">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="title-content">
                            <ul>
                                <li>
                                    <Link to={"/"} className="text-decoration-none text-dark">Home</Link>
                                </li>
                                <li>
                                    <span> &times; </span>
                                </li>
                                <li>
                                    <span className='page-name'>Cart</span>
                                </li>
                            </ul>
                            <h2 className='page-name'>Cart</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Cart