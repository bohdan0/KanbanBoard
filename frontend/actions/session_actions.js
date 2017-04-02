import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const signUp = data => dispatch => (
  SessionApiUtil.signUp(data)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => console.log(err.responseJSON))
);

export const logIn = data => dispatch => (
  SessionApiUtil.logIn(data)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => console.log(err.responseJSON))
);

export const logOut = () => dispatch => (
  SessionApiUtil.logOut()
    .then(user => dispatch(receiveCurrentUser(null)))
    .fail(err => console.log(err.responseJSON))
);