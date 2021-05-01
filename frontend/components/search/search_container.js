import { connect } from 'react-redux';
import Search from './search';
import { fetchVendors, fetchVendor } from '../../actions/vendor_actions';
import { updateFilter } from '../../actions/filter_actions';

const msp = state => {
  return {
    vendors: Object.values(state.entities.vendors),
    currentUser: state.entities.users[state.session.id],
    mapSearchCoords: state.ui.search.coords
  };
}

const mdp = dispatch => {
  return ({
    fetchVendors: () => dispatch(fetchVendors()),
    fetchVendor: id => dispatch(fetchVendor(id)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  });
}

export default connect(msp, mdp)(Search);
