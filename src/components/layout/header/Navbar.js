import React, { Fragment, useContext } from 'react';
import './header.css';
import Backdrop from './Backdrop';
import { Link } from 'react-router-dom';
import NavContext from '../../../context/nav/NavContext'



const Navbar = () => {
  const navContext = useContext(NavContext)

  
  return (
    <Fragment>
      <Backdrop />
      {/* Framer Motion (for React) #11 - Animate Presence */}
      <ul className="navbar">
        <li className="nav-link">
          <Link to='/'>Home</Link>
        </li>
        <li className="nav-link">
          <Link to='/cats'>Cats</Link>
        </li>
        <li className="nav-link">
          <Link to='/dogs'>Dogs</Link>
        </li>
        <li className="nav-link">
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </Fragment>
  )
}

export default Navbar
