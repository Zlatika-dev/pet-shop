import {
  TOGGLE_NAV_TYPE,
  TOGGLE_MOBILE_NAV,
  SHOW_MOBILE_NAV,
  HIDE_MOBILE_NAV
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_MOBILE_NAV:
      return{
        ...state,
        toggle: !state.toggle
      }
      case SHOW_MOBILE_NAV:
        return{
          ...state,
          toggle: true
        }
        case HIDE_MOBILE_NAV:
        return{
          ...state,
          toggle: false
        }

    default:
      return state
  }
}