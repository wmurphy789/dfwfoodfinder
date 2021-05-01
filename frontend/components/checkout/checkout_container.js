import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchVendor } from '../../actions/vendor_actions';
import { createBooking } from '../../actions/booking_actions';
import { fetchHost } from '../../actions/user_actions';
import Checkout from './checkout';

const msp = (state, ownProps) => {
  let vendorId = ownProps.match.params.vendorId;
  let vendor = state.entities.vendors[vendorId]

  return ({
    bookingParams: state.ui.checkout[vendorId],
    currentUser: state.entities.users[state.session.id],
    vendor: state.entities.vendors[vendorId],
    vendorId: vendorId
  });
}

const mdp = dispatch => {
  return ({
    fetchVendor: vendorId => dispatch(fetchVendor(vendorId)),
    createBooking: booking => dispatch(createBooking(booking)),
    fetchHost: hostId => dispatch(fetchHost(hostId))
  });
}

export default withRouter(connect(msp, mdp)(Checkout));
