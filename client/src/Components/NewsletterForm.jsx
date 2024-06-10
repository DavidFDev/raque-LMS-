import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";

const NewsletterForm = () => {
  const { isLoggedIn, email } = useAuthContext();

  const [userEmail, setUserEmail] = useState(email !== 0 || isLoggedIn && email);

  return (
    <form className="newsletter-form d-flex flex-column gap-2">
      <label htmlFor="useremail" className="text-white">
        Your e-mail address:
      </label>


      <input
        className="form-control mb-1 bg-transparent"
        type="email"
        name="email"
        id="useremail"
        placeholder="Enter your email"
        autoComplete="on"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        required
      />


      <button type="submit" className="btn w-100 bg-altlemon text-white">
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
