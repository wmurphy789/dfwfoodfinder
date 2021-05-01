import { connect } from 'react-redux';
import VendorShowInfoOverlay from './vendor_show_info_overlay';
import { openModal, closeModal } from '../../../actions/modal_actions';

const msp = (state, ownProps) => {
  return ({
    vendor: ownProps.vendor
  });
}

const mdp = dispatch => {
  return ({
    openModal: type => dispatch(openModal(type)),
    closeModal: () => dispatch (closeModal())
  });
}

export default connect(msp, mdp)(VendorShowInfoOverlay);
