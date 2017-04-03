import merge from 'lodash/merge';

import { RECEIVE_ALL_LISTS,
         RECEIVE_LIST,
         REMOVE_LIST } from '../actions/list_actions';
import { RECEIVE_TASK,
         REMOVE_TASK } from '../actions/task_actions';

const ListsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  
  switch(action.type) {
    case RECEIVE_ALL_LISTS:
      Object.keys(action.lists).forEach(listId => {
        delete action.lists[listId].tasks;
      });
      return action.lists;
    case RECEIVE_LIST:
      delete action.list.tasks;
      newState[action.list.id] = action.list;
      return newState;
    case REMOVE_LIST:
      delete newState[action.list.id];
      return newState;
    case RECEIVE_TASK:
      let taskIds = newState[action.task.list_id].task_ids;
      if (taskIds.indexOf(action.task.id) === -1) {
        newState[action.task.list_id].task_ids = [action.task.id, ...taskIds];
      }
      if (action.oldListId) {
        let idxToDelete = newState[action.oldListId].task_ids.indexOf(action.task.id);
        newState[action.oldListId].task_ids.splice(idxToDelete, 1);
      }
      return newState;
    case REMOVE_TASK:
      const idxToRemove = newState[action.task.list_id].task_ids.indexOf(action.task.id);
      newState[action.task.list_id].task_ids.splice(idxToRemove, 1);
      return newState;
    default:
      return newState;
  }
};

export default ListsReducer;