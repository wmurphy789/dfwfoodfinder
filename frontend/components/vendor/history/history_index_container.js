import { connect } from 'react-redux';
import Index from './index';
import { fetchHistory } from '../../../actions/history_actions';

const msp = (state, ownProps) => {
  return ({
    history: Object.values(state.entities.history)
  });
}

const mdp = dispatch => {
  return ({
    fetchHistory: () => dispatch(fetchHistory()),
  });
}

export default connect(msp, mdp)(Index);