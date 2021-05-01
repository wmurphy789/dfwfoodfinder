import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import LandingMain from './landing/landing_main';
import SearchContainer from './search/search_container';
import VendorShowContainer from './vendors/vendor_show/vendor_show_container';
import CheckoutContainer from './checkout/checkout_container';
import TripsContainer from './trips/trips_container';
import SessionContainer from './vendor/session/session_container';
import HomeContainer from './vendor/home/home_index_container';
import HistoryContainer from './vendor/history/history_index_container';
import VendorLayout from './layout/vendor_layout'

const App = () => {
  return (
    <main className="main__container">
      <Switch>
        <AuthRoute exact path="/" component={LandingMain} />
        <AuthRoute exact path="/vendor/session" component={SessionContainer} />

        <ProtectedRoute 
          path="/vendors/:vendorId" 
          component={VendorShowContainer} />
        <ProtectedRoute 
          exact path="/vendors" 
          component={SearchContainer} />
        <ProtectedRoute 
          path="/checkout/:vendorId" 
          component={CheckoutContainer} />
        <ProtectedRoute 
          path="/trips/:userId" 
          component={TripsContainer} />
        
        <ProtectedRoute 
          exact path="/vendor/home" 
          layout={VendorLayout}
          component={HomeContainer} />
        <ProtectedRoute 
          exact path="/vendor/history" 
          layout={VendorLayout}
          component={HistoryContainer} />
      </Switch>
    </main>
  );
}

export default App;
