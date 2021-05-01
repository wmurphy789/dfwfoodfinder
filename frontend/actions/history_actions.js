import * as HistoryApiUtil from '../util/history_api_util';

export const RECEIVE_HISTORY = 'RECEIVE_HISTORY';


// Regular action creators
const receiveHistory = history => {
  return ({
    type: RECEIVE_HISTORY,
    history: history
  });
} 

// Thunk action creators
export const fetchHistory = () => dispatch => {
  return HistoryApiUtil.fetchHistory()
    .then(history => dispatch(receiveHistory(history)));
}