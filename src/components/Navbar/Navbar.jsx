import React, { useState } from 'react'
import './Navbar.less'
import { assets } from '../../assets/assets'

const Navbar = () => {

  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar-wrap'>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src={assets.logo} alt="logo" />
          </div>
          <div className="navbat-menu">
            <ul>
              <li onClick={() => setMenu("home")} className={menu == "home" ? "active" : ""}>Home</li>
              <li onClick={() => setMenu("menu")} className={menu == "menu" ? "active" : ""}>Menu</li>
              <li onClick={() => setMenu("mobile-app")} className={menu == "mobile-app" ? "active" : ""}>Mobile App</li>
              <li onClick={() => setMenu("contact-us")} className={menu == "contact-us" ? "active" : ""}>Contact Us</li>
            </ul>
          </div>
          <div className="navbar-right">
            <img src={assets.search_icon} alt="search-icon" />
            <div className="navbar-serch-icon">
              <img src={assets.basket_icon} alt="basket-icon" />
              <div className="dot"></div>
            </div>
            <div className="btn-wrap">
              <button>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
