import {
  TOGGLE_NAV_TYPE,
  TOGGLE_MOBILE_NAV
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_MOBILE_NAV:
      return{
        ...state,
        toggle: !state.toggle
      }
    default:
      return state
  }
}