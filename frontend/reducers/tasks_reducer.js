import merge from 'lodash/merge';

import { RECEIVE_TASK,
         REMOVE_TASK,
         DROP_TASK } from '../actions/task_actions';
import { RECEIVE_ALL_LISTS,
         RECEIVE_LIST,
         REMOVE_LIST } from '../actions/list_actions';

const initialState = {
  task_ids: {},
  tasks: {}
};

const TasksReducer = (state = initialState, action) => ({
  task_ids: taskIds(state.task_ids, action),
  tasks: tasks(state.tasks, action)
});

const taskIds = (state, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
  case RECEIVE_TASK:
    if (!newState[action.task.list_id]) {
      newState[action.task.list_id] = [action.task.id];
      return newState;
    } else if (newState[action.task.list_id].indexOf(action.task.id) === -1) {
      newState[action.task.list_id] = [action.task.id, ...newState[action.task.list_id]];
      return newState;
    } else {
      return state;
    }
  case REMOVE_TASK:
    const idxToRemove = newState[action.task.list_id].indexOf(action.task.id);
    newState[action.task.list_id].splice(idxToRemove, 1);
    return newState;
  case DROP_TASK:
    let idxToDelete = newState[action.oldListId].indexOf(action.task.id);
    if (action.oldListId === action.newListId) {
      newState[action.newListId].splice(action.newPosition, 0,
        newState[action.newListId].splice(idxToDelete, 1)[0]);
    } else {
      newState[action.oldListId].splice(idxToDelete, 1);
      newState[action.newListId].splice(action.newPosition, 0, action.task.id);
    }
    return newState;
  case RECEIVE_ALL_LISTS:
    action.lists.list_ids.forEach(listId => {
      newState[listId] = action.lists[listId].task_ids;
      delete action.lists[listId].task_ids;
    });
    return newState;
  case RECEIVE_LIST:
    if (newState[action.list.id]) {
      return state;
    } else {
      newState[action.list.id] = [];
      return newState;
    }
  case REMOVE_LIST:
    delete newState[action.list.id];
    return newState;
  default:
    return state;
  }
};

const tasks = (state, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  
  switch(action.type) {
  case RECEIVE_TASK:
    newState[action.task.id] = action.task;
    return newState;
  case REMOVE_TASK:
    delete newState[action.task.id];
    return newState;
  case DROP_TASK:
    if (newState[action.task.id].list_id === action.task.list_id) {
      return state;
    } else {
      newState[action.task.id] = action.task;
      return newState;
    }
  case RECEIVE_ALL_LISTS:
    action.lists.list_ids.forEach(listId => {
      action.lists[listId].tasks.forEach(task => {
        newState[task.id] = task;
      });
      delete action.lists[listId].tasks;
    });
    return newState;
  default:
    return state;
  }
};

export default TasksReducer;
