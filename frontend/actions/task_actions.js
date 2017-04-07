import * as TasksApiUtil from '../util/tasks_api_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const DROP_TASK = 'DROP_TASK';

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const removeTask = task => ({
  type: REMOVE_TASK,
  task
});

export const dropTask = (task, oldListId, newListId, newPosition) => ({
  type: DROP_TASK,
  newPosition,
  oldListId,
  newListId,
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

export const moveTask = (task, newListId, newPosition) => dispatch => {
  const oldListId = task.list_id;
  task.list_id = newListId;
  task.position = newPosition + 1; // position in database starts form 1; on frontend from 0
  TasksApiUtil.updateTask(task)
    .then(updatedTask => dispatch(dropTask(updatedTask, oldListId, newListId, newPosition)));
};