import usersReducer from './users_reducer';
import vendorReducer from './vendor_reducer';
import reviewsReducer from './reviews_reducer';
import bookingReducer from './bookings_reducer';

import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
  users: usersReducer,
  vendors: vendorReducer,
  reviews: reviewsReducer,
  bookings: bookingReducer
});

export default entitiesReducer;
