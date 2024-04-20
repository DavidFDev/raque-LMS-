import React from 'react'
import { FaFacebookF, FaTwitter } from 'react-icons/fa6'

const SocialAuth = () => {
  return (

    <div className="connect-with-social">
        <span>Or</span>
        <button type="submit" className="facebook"><FaFacebookF className="facebook"/> Connect with Facebook</button>
        <button type="submit" className="twitter"><FaTwitter className="twitter"/> Connect with Twitter</button>
    </div>
  )
}

export default SocialAuth