import merge from 'lodash/merge';

import { RECEIVE_TASK,
         REMOVE_TASK,
         DROP_TASK } from '../actions/task_actions';
import { RECEIVE_ALL_LISTS,
         REMOVE_LIST } from '../actions/list_actions';

const TasksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  
  switch(action.type) {
    case RECEIVE_TASK:
    case DROP_TASK:
      newState[action.task.id] = action.task;
      return newState;
    case REMOVE_TASK:
      delete newState[action.task.id];
      return newState;
    case REMOVE_LIST:
      action.list.task_ids.forEach(taskId => {
        delete newState[taskId];
      });
      return newState;
    case RECEIVE_ALL_LISTS:
      Object.keys(action.lists).forEach(listId => {
        action.lists[listId].tasks.forEach(task => {
          newState[task.id] = task;
        });
      });
      return newState;
    default:
      return newState;
  }
};

export default TasksReducer;