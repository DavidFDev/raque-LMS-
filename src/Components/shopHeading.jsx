import { Link } from 'react-router-dom'

const ShopHeading = () => {
  return (
    <div className="container p-0">
        <div className="d-table">
            <div className="d-table-cell">
                <div className="title-content">
                    <ul>
                        <li>
                            <Link to={"/contact"} className="text-decoration-none text-dark">Home</Link>
                        </li>
                        <li>
                            <span> &times; </span>
                        </li>
                        <li>
                            <span>Shop</span>
                        </li>
                    </ul>
                    <h2>Shop</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopHeading