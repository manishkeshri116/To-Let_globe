import React from 'react'
import logo from '../assests/logo.png'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='main'>
    <nav className="navbar">
    <div className="navbar-logo">
      {/* Your logo image or text */}
      <img className='logo' src={logo} alt="Logo" />
    </div>
    <ul className="navbar-items">
      <li><a href="/">Home</a></li>
      <li><a href="#services">Servies</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="about">About</a></li>

      <li><a href="#contact">Property Listing</a></li>

      {/* Add more menu items as needed */}
    </ul>
  </nav>

    </div>
  )
}

export default Navbar