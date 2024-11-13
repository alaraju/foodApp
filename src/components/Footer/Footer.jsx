import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id="footer">
        
        <div className='footer-content'>
            <div className='footer-content-left'>
                <h1>DishDart</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul >
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-conter-right'>
                <h2>GET IN TOUCH</h2>
                <ul className='footer-list'>
                    <li>+1-212-456-7890</li>
                    <li>contact@DishDart</li>
                </ul>
            </div>
        </div>
        <hr />
        <p>Copyright 2024 DishDart.com - All rights are Reserved.</p>
    </div>
  )
}

export default Footer