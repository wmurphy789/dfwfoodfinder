import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({component: Component, path, loggedIn, loggedVendorIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    (!loggedIn && !loggedVendorIn) ? (
      <Component {...props} />
    ) : (
      loggedVendorIn ? (
        <Redirect to='/vendor/home' />
      ) : (
        <Redirect to='/vendors' />
      )
    )
  )} />
);

const Protected = ({component: Component, layout: Layout, path, loggedIn, loggedVendorIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn || loggedVendorIn ? (
      Layout ? (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      ) : (
        <Component {...props} />
      )
    ) : (
      <Redirect to='/' />
    )
  )} />
);

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id),
    loggedVendorIn: Boolean(state.session.vendor_id)
  }
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
