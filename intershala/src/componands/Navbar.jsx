import React from 'react'
import Logo from '../asest/logo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left-navbar'>
         <img src={Logo} alt="" />
         <ul>
            <li className='active'>Home</li>
            <li>About us</li>
            <li>Prioing</li>
            <li>Features</li>
         </ul>
        </div>

        <div className='right-navbar'>
            <button>Download</button>
        </div>

    </div>
  )
}

export default Navbar