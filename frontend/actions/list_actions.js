import * as ListApiUtil from '../util/lists_api_util';

export const RECEIVE_ALL_LISTS = 'RECEIVE_ALL_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

export const receiveAllLists = lists => ({
  type: RECEIVE_ALL_LISTS,
  lists
});

export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

export const removeList = list => ({
  type: REMOVE_LIST,
  list
});

export const fetchAllLists = () => dispatch => (
  ListApiUtil.fetchAllLists()
    .then(lists => dispatch(receiveAllLists(lists)))
);

export const createList = data => dispatch => (
  ListApiUtil.createList(data)
    .then(list => dispatch(receiveList(list)))
);

export const updateList = data => dispatch => (
  ListApiUtil.updateList(data)
    .then(list => dispatch(receiveList(list)))
);

export const deleteList = id => dispatch => (
  ListApiUtil.removeList(id)
    .then(list => dispatch(removeList(list)))
);