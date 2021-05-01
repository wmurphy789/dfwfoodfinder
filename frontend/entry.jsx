import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import Root from './components/root';

// import { fetchAllBookings } from './actions/booking_actions';
// import { fetchHost } from "./actions/user_actions";
// import { fetchReviews, fetchReviewsByVendorId } from "./util/review_api_util";
// import { signUp, logIn, logOut } from './actions/session_actions';
// import { fetchVendors } from './actions/vendor_actions';
import configureStore from './store/store';


// import { fetchVendors } from './util/vendor_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: {id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else if(window.currentVendor) {
    const preloadedState = {
      entities: {
        vendors: { [window.currentVendor.id]: window.currentVendor }
      },
      session: {vendor_id: window.currentVendor.id }
    };
    store = configureStore(preloadedState);
    delete window.currentVendor;
  } else {
    store = configureStore();
  }

  ReactDOM.render(
    <Root store={store} />,
    root  
  );
});

