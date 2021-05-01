import {
  RECEIVE_HISTORY
} from '../actions/history_actions';
import { merge } from 'lodash';

const defaultState = {
  history: [],
  loading: false
}

const historyReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_HISTORY:
      return action.history;
    default:
      return oldState;
  }
}

export default historyReducer;
