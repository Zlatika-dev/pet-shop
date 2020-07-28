import React, { Fragment } from 'react';
import './header.css';
import Backdrop from '../Backdrop';
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <Fragment>
      {/* <Backdrop /> */}
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
