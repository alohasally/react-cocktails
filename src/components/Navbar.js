import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar({ logo}) {
  return (
  <nav className='navbar'>
    <div className='nav-center'>
      <Link to='/'>
        <img src={logo} alt='cocktail logo'
        className='logo'></img>
      </Link>
      <ul className='nav-links'>
        <li>
          <Link to='/'>
            Home
          </Link>
          <Link to='/about'>
            About
          </Link>
        </li>
      </ul>
      </div>
  </nav>
  )
}
