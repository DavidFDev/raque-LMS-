import { TbLogin2 } from "react-icons/tb";
import CheckOutForm from "../Components/CheckOutForm";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <section className='checkout-area'>
        <div className="container p-lg-0">
            <div className="user-actions d-flex align-items-center flex-nowrap gap-2">
                <TbLogin2 className="icon fs-4 text-altlemon" />
                <span>
                    Returning customer? &nbsp;
                    <Link to="/login">Click here to login</Link>
                </span>
            </div>


            <section className="checkout-form-section">
                <CheckOutForm/>
            </section>
        </div>
    </section>
  )
}

export default Checkout