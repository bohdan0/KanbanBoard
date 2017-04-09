import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullUser = ({
  id: null,
  username: null
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser || _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;