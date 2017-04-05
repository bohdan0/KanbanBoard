import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { DROP_LIST, RECEIVE_LIST, REMOVE_LIST } from '../actions/list_actions';

const _nullUser = ({
  id: null,
  username: null,
  list_ids: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser || _nullUser;
    case RECEIVE_LIST:
      newState.list_ids.push(action.list.id);
      return newState;
    case REMOVE_LIST:
      const idxToDelete = newState.list_ids.indexOf(action.list.id);
      newState.splice(idxToDelete, 1);
      return newState;
    case DROP_LIST:
      const idxFrom = newState.list_ids.indexOf(action.list.id);
      newState.list_ids.splice(action.newPosition, 0, newState.list_ids.splice(idxFrom, 1)[0]);
      return newState;
    default:
      return newState;
  }
};

export default SessionReducer;