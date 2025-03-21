import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import Arrow_icon from '../../assets/arrow_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} className='logo' />
      <ul>
        <li > <Link to="/">Home</Link></li>
        <li> <Link to="/features">Features</Link></li>
        <li>  <Link to="/pricing">Pricing</Link></li>
        <li>  <Link to="/blog">Blog</Link></li>

      </ul>
      <div className='Nav-right'>
        <select>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>Sign up <img src={Arrow_icon} /></button>
      </div>

    </div>
  )
}

export default Navbar
