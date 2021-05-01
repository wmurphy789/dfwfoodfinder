import { connect } from 'react-redux';
import VendorShow from './vendor_show';
import { fetchVendor } from '../../../actions/vendor_actions';
import { fetchReviewsByVendorId } from '../../../actions/review_actions';
import { fetchHost } from "../../../actions/user_actions";

const msp = (state, ownProps) => {
  let vendorId = ownProps.match.params.vendorId;
  let vendor = state.entities.vendors[vendorId];

  return ({
    vendor: vendor,
    currentUser: state.entities.users[state.session.id],
    reviews: state.entities.reviews,
    users: state.entities.users
  });
}

const mdp = dispatch => {
  return {
    fetchVendor: id => dispatch(fetchVendor(id)),
    fetchReviews: vendorId => dispatch(fetchReviewsByVendorId(vendorId)),
    fetchHost: hostId => dispatch(fetchHost(hostId))
  };
}

export default connect(msp, mdp)(VendorShow);
