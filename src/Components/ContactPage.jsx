import { Link } from 'react-router-dom'

const ContactPage = () => {
  return (
    <section className='contact-area'>
        <div className="page-title-area">
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
                                    <span>Contact</span>
                                </li>
                            </ul>
                            <h2>Contact Us</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactPage