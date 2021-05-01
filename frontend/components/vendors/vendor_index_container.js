import { connect } from 'react-redux';
import VendorIndex from './vendor_index';
import { fetchVendors, fetchVendor } from '../../actions/vendor_actions';
import { updateSearchCoords } from "../../actions/search_actions";

const msp = (state, ownProps) => {
  return ({
    vendors: Object.values(state.entities.vendors)
  });
}

const mdp = dispatch => {
  return ({
    fetchVendors: () => dispatch(fetchVendors()),
    fetchVendor: id => dispatch(fetchVendor(id)),
    updateSearchCoords: (lat, lng) => dispatch(updateSearchCoords(lat, lng))
  });
}

export default connect(msp, mdp)(VendorIndex);
