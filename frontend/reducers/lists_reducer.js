import merge from 'lodash/merge';

import { RECEIVE_ALL_LISTS,
         RECEIVE_LIST,
         REMOVE_LIST,
         DROP_LIST } from '../actions/list_actions';

const initialState = {
  list_ids: [],
  lists: {}
};

const ListsReducer = (state = initialState, action) => ({
    list_ids: listIds(state.list_ids, action),
    lists: lists(state.lists, action)
});

const listIds = (state, action) => {
  Object.freeze(state);
  let newState = [...state];

  switch(action.type) {
  case RECEIVE_ALL_LISTS:
    newState = action.lists.list_ids;
    delete action.lists.list_ids;
    return newState;
  case RECEIVE_LIST:
    if (newState.indexOf(action.list.id) === -1) {
      newState.push(action.list.id);
      return newState;
    } else {
      return state;
    }
  case REMOVE_LIST:
    const idxToDelete = newState.indexOf(action.list.id);
    newState.splice(idxToDelete, 1);
    return newState;
  case DROP_LIST:
    const idxFrom = newState.indexOf(action.list.id);
    newState.splice(action.newPosition, 0,
      newState.splice(idxFrom, 1)[0]);
    return newState;
  default:
    return state;
  }
};

const lists = (state, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
  case RECEIVE_ALL_LISTS:
    return action.lists;
  case RECEIVE_LIST:
    newState[action.list.id] = action.list;
    return newState;
  case REMOVE_LIST:
    delete newState[action.list.id];
    return newState;
  default:
    return state;
  }
};
  // switch(action.type) {
  //   case RECEIVE_ALL_LISTS:
  //     Object.keys(action.lists).forEach(listId => {
  //       delete action.lists[listId].tasks;
  //     });
  //     return action.lists;
  //   case RECEIVE_LIST:
  //     delete action.list.tasks;
  //     newState[action.list.id] = action.list;
  //     return newState;
  //   case REMOVE_LIST:
  //     delete newState[action.list.id];
  //     return newState;
  //   case RECEIVE_TASK:
  //     taskIds = newState[action.task.list_id].task_ids;
  //     if (taskIds.indexOf(action.task.id) === -1) {
  //       newState[action.task.list_id].task_ids = [action.task.id, ...taskIds];
  //     }
  //     return newState;
  //   case REMOVE_TASK:
  //     const idxToRemove = newState[action.task.list_id].task_ids.indexOf(action.task.id);
  //     newState[action.task.list_id].task_ids.splice(idxToRemove, 1);
  //     return newState;
  //   case DROP_TASK:
  //     let idxToDelete = newState[action.oldListId].task_ids.indexOf(action.task.id);
  //     if (action.oldListId === action.newListId) {
  //       newState[action.newListId].task_ids.splice(action.newPosition, 0,
  //         newState[action.newListId].task_ids.splice(idxToDelete, 1)[0]);
  //     } else {
  //       newState[action.oldListId].task_ids.splice(idxToDelete, 1);
  //       newState[action.newListId].task_ids.splice(action.newPosition, 0, action.task.id);
  //     }
  //     return newState;
  //   default:
  //     return state;
  // }

export default ListsReducer;