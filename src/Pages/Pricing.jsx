import { Link } from "react-router-dom"
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { Fa0 } from "react-icons/fa6";

const Pricing = () => {
  return (
    <>
        <section className="pricing-area">

            <div className="pricing-banner page-title-area">
                <div className="container">
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
                                        <span className='page-name'>Pricing</span>
                                    </li>
                                </ul>
                                <h2 className='page-name'>Transparent Pricing</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-pricing-area ptb-100 pb-lg-100 pt-lg-0">
                <div className="container">
                    <div className="pricing-table table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Packages</th>
                                    <th scope="col">Freelancer</th>
                                    <th scope="col">Householder</th>
                                    <th scope="col">Business Man</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <td>Control payout timing</td>
                                    <td><FaCheckCircle  className="check-icon"/></td>
                                    <td><FaCheckCircle  className="check-icon"/></td>
                                    <td><FaCheckCircle  className="check-icon"/></td>
                                </tr>
                                <tr>
                                    <td>Transparent payouts</td>
                                    <td><FaCheckCircle className="check-icon"/></td>
                                    <td><FaTimes className="bx bx-x"/></td>
                                    <td><FaCheckCircle className="check-icon"/></td>
                                </tr>
                                <tr>
                                    <td>Automate evidence submission</td>
                                    <td><FaTimes className=""/></td>
                                    <td><FaCheckCircle className="check-icon"/></td>
                                    <td><FaCheckCircle className="check-icon"/></td>
                                </tr>
                                <tr>
                                    <td>Collaboration notes</td>
                                    <td><FaCheckCircle   className="check-icon"/></td>
                                    <td><FaTimes className="bx bx-x"/></td>
                                    <td><FaTimes className="bx bx-x"/></td>
                                </tr>
                                <tr>
                                    <td>Deposit tagging</td>
                                    <td><FaCheckCircle   className="check-icon"/></td>
                                    <td><FaCheckCircle   className="check-icon"/></td>
                                    <td><FaTimes className="bx bx-x"/></td>
                                </tr>
                                <tr>
                                    <td>Technical support over IRC</td>
                                    <td><FaCheckCircle className="check-icon"/></td>
                                    <td><FaCheckCircle className="check-icon"/></td>
                                    <td><FaCheckCircle className="check-icon"/></td>
                                </tr>
                                <tr>
                                    <td>24×7 support</td>
                                    <td><FaTimes className="bx bx-x"/></td>
                                    <td><FaCheckCircle   className="check-icon"/></td>
                                    <td><FaCheckCircle   className="check-icon"/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Pricing