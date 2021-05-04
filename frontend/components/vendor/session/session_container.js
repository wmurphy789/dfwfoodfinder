import React from 'react';
import Session from './session';
import { connect } from 'react-redux';
import { logInVendor, clearErrors } from '../../../actions/session_actions';

const msp = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'Log in'
  });
};

const mdp = dispatch => {
  return ({
    processForm: user => dispatch(logInVendor(user)),
    processDemoForm: user => dispatch(logInVendor(user)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(msp, mdp)(Session);