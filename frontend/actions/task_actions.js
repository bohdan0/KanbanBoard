import * as TasksApiUtil from '../util/tasks_api_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const removeTask = task => ({
  type: REMOVE_TASK,
  task
});

export const createTask = data => dispatch => (
  TasksApiUtil.createTask(data)
    .then(task => dispatch(receiveTask(task)))
);

export const updateTask = data => dispatch => (
  TasksApiUtil.updateTask(data)
    .then(task => dispatch(receiveTask(task)))
);

export const deleteTask = id => dispatch => (
  TasksApiUtil.removeTask(id)
    .then(task => dispatch(removeTask(task)))
);