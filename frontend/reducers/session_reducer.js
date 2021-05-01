import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER,
  RECEIVE_CURRENT_VENDOR
} from '../actions/session_actions';

import { merge } from 'lodash';

const defaultState = {
  id: null,
  vendor_id: null
};

const sessionReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  // let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {id: action.user.id};
    case RECEIVE_CURRENT_VENDOR:
      return {vendor_id: action.vendor.id};
    case LOGOUT_CURRENT_USER:
      return defaultState;
    default: 
      return oldState;
  }
}

export default sessionReducer;