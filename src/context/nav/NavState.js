import React, { useReducer } from 'react';
import NavContext from './NavContext';
import NavReducer from './NavReducer';
import {

  SHOW_NAV,
  CLOSE_NAV
} from '../types'

const NavState = props => {
  const initialState = {
    toggle: true
  };

  const [state, dispatch] = useReducer(NavReducer, initialState)


  const toggleBackdrop = () => {
    dispatch({ type: CLOSE_NAV })
  }

  return (
    <NavContext.Provider 
    value={{
      toggle: state.toggle,
      toggleBackdrop
    }}>
{props.children}
    </NavContext.Provider>
  )
}

export default NavState
