import {
  SHOW_NAV,
  CLOSE_NAV
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case CLOSE_NAV:
      return{
        ...state,
        toggle: !state.toggle
      }
    default:
      return state
  }
}