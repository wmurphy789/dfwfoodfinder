import Signup from './signup';
import { connect } from 'react-redux';
import { signUpvendor, clearErrors } from '../../../actions/session_actions';

const msp = (state, ownProps) => {
  return ({
    errors: state.errors.session
  });
};

const mdp = dispatch => {
  return ({
    processForm: vendor => dispatch(signUpvendor(vendor)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(msp, mdp)(Signup);