import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext"


const NewsletterForm = () => {
    const {email} = useAuthContext();

    const [userEmail, setUserEmail] = useState(email);
    
  return (
    <form className="newsletter-form d-flex flex-column gap-2">
        <label htmlFor="email" className="text-white">Your e-mail address:</label>
        <input className="form-control mb-1 bg-transparent" type="email" name="email" id="email" placeholder="Enter your email" required autoComplete="on" value={userEmail} onChange={e => setUserEmail(e.target.value)} />
        <button type="submit" className="btn w-100 bg-deepred text-white">Subscribe</button>
    </form>
  )
}

export default NewsletterForm