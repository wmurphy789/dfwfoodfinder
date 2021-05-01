import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookingForm from './booking_form';
import { closeModal } from '../../../actions/modal_actions';
import { receiveCheckoutInfo } from '../../../actions/checkout_actions';

const msp = (state, ownProps) => {
  let vendorId = ownProps.match.params.vendorId;  

  return ({
    vendor: state.entities.vendors[vendorId],
    currentUser: state.entities.users[state.session.id]
  });
}

const mdp = dispatch => {
  return ({
    fetchVendor: vendorId => dispatch(fetchVendor(vendorId)),
    closeModal: () => dispatch(closeModal()),
    receiveCheckoutInfo: bookingParams => dispatch(receiveCheckoutInfo(bookingParams))
    // Add in submit booking action here (createBooking)
    // Add clearBookingErrors to remove booking errors from redux state
  });
}

export default withRouter(connect(msp, mdp)(BookingForm));


// { start_date: "Wed Jul 10 2019 12: 00: 00 GMT - 0700(Pacific Daylight Time)", end_date: "Sat Jul 13 2019 12: 00: 00 GMT - 0700(Pacific Daylight Time)", num_guests: 3, vendor_id: 215, user_id: 539 }