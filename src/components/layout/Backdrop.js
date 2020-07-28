import React from 'react';
import '../../App.css';

const Backdrop = props => {
  let backdrop = 'backdrop'
  if (props.backdrop) {
    backdrop += ' backdrop';
}
  return <div
    className={backdrop}
    // onClick={props.backdropCloseAll}
     >
  </div>
}
export default Backdrop;