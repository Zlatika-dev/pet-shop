import React, { useContext } from 'react';
import '../../../App.css';
import NavContext from '../../../context/nav/NavContext'



const Backdrop = props => {
  const navContext = useContext(NavContext);

  const { toggleBackdrop, toggle } = navContext;

  
  return <div
    className={(toggle ? 'backdrop' : 'default-backdrop')}
    onClick={toggleBackdrop}
  >
  </div>
}
export default Backdrop;