import React from 'react';
import './header.css';
import '../../../App.css';
import Cart from './Cart';
import Navbar from './Navbar';


const Header = () => {
  return (
    <div className="header container">
     <div className="logo">
       <h1><span className="logo-u">U</span>ruru</h1>
       <h2>Pet'spower</h2>
     </div>
      <Navbar />
      <Cart />
    </div>
  )
}

export default Header
