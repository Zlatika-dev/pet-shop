import React, { useContext } from 'react';
import '../../../App.css';
import NavContext from '../../../context/nav/NavContext'



const Backdrop = props => {
  const navContext = useContext(NavContext);
  
  const { toggleBackdrop } = navContext;

  // let backdrop = 'backdrop'
  // if (props.backdrop) {
  //   backdrop += ' backdrop';
  // }
  return <div
    className='backdrop'
    onClick={toggleBackdrop}
  >
  </div>
}
export default Backdrop;