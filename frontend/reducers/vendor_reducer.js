import { 
  RECEIVE_ALL_VENDORS, 
  RECEIVE_VENDOR, 
  REMOVE_VENDOR
} from '../actions/vendor_actions';
import { merge } from 'lodash';

const vendorReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_ALL_VENDORS:
      return action.vendors;
    case RECEIVE_VENDOR:
      newState[action.vendor.id] = action.vendor;
      return newState;
    case REMOVE_VENDOR:
      delete newState[action.vendorId];
      return newState;
    default:
      return oldState;
  }
};

export default vendorReducer;
