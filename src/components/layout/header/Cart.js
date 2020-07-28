import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  return (
    <div className="cart cart-icon">
      <FontAwesomeIcon
        icon={faCartArrowDown}
      />
    </div>
  )
}

export default Cart
