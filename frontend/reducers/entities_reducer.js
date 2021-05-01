import usersReducer from './users_reducer';
import vendorReducer from './vendor_reducer';
import reviewsReducer from './reviews_reducer';
import bookingReducer from './bookings_reducer';
import historyReducer from './history_reducer';

import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
  users: usersReducer,
  vendors: vendorReducer,
  reviews: reviewsReducer,
  history: historyReducer,
  bookings: bookingReducer
});

export default entitiesReducer;
