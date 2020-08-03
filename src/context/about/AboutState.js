import React, { useReducer } from 'react';

import axios from 'axios';
import AboutContext from './AboutContext';
import AboutReducer from './AboutReducer';
import {


  SET_LOADING,
  GET_MAP
} from '../types'

const AboutState = () => {

  const initialState = {
    loading: false,

  };

  return (
    <div>
      
    </div>
  )
}

export default AboutState
