import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
     <div className="footer-icons">
      <img src={youtube_icon} alt="" className="icon youtube" />
      <img src={instagram_icon} alt="" className="icon instagram" />
      <img src={twitter_icon} alt="" className="icon twitter" />
      <img src={facebook_icon} alt="" className="icon facebook" />
     </div>
     <ul>
      <li>Audio Description</li>
      <li>Help Center</li>
      <li>Gift Cards</li>
      <li>Media Center</li>
      <li>Investor Relations</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>Legal Notice</li>
      <li>Corporate Information</li>
      <li>Cookie Preferences</li>
      <li>Contact Us</li>
     </ul>
     <p className='copyright-text'>© 2000-2025 NetMirror. All rights reserved.</p>
    </div>
  )
}

export default Footer