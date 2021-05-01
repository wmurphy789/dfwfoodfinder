import { connect } from 'react-redux';
import VendorShowReviews from './vendor_show_reviews';
import { openModal } from '../../../actions/modal_actions';

const msp = (state, ownProps) => {
  return ({
    reviews: ownProps.reviews,
    vendor: ownProps.vendor
  });
}

const mdp = dispatch => {
  return ({
    openModal: type => dispatch(openModal(type))
  });
}

export default connect(msp, mdp)(VendorShowReviews);