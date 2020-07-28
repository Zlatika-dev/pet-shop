import React, { Fragment } from 'react';
import './header.css';
import Backdrop from '../Backdrop'



const Navbar = () => {
  return (
    <Fragment>
      <Backdrop />
      <ul className="navbar-mobile">
        <li className="nav-link">Home</li>
        <li className="nav-link">Cats</li>
        <li className="nav-link">Dogs</li>
        <li className="nav-link">About</li>
      </ul>
    </Fragment>
  )
}

export default Navbar
