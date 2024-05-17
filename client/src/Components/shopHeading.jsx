import { Link } from 'react-router-dom'
import { IoChevronForward } from 'react-icons/io5'


const ShopHeading = () => {
  return (
    <div className="container">
        <div className="d-table">
            <div className="d-table-cell">
                <div className="title-content">
                    <ul>
                        <li>
                            <Link to={"/"} className="text-decoration-none text-dark">Home</Link>
                        </li>
                        <li>
                            <span> <IoChevronForward/> </span>
                        </li>
                        <li>
                            <span className='page-name'>Shop</span>
                        </li>
                    </ul>
                    <h2 className='page-name'>Shop</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopHeading