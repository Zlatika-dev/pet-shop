import React, {useContext} from 'react';
import NavContext from '../../../context/nav/NavContext'

const MobileMenu = () => {
  const navContext = useContext(NavContext);

  const { toggleBackdrop } = navContext;

  return (
    <div className="nav-mobile-menu"
    onClick={toggleBackdrop}>
      <span className="nav-mobile-menu_bar"></span>
      <span className="nav-mobile-menu_bar"></span>
      <span className="nav-mobile-menu_bar"></span>
      
    </div>
  )
}

export default MobileMenu
