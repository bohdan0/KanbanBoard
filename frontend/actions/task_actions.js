import * as TasksApiUtil from '../util/tasks_api_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const DROP_TASK = 'DROP_TASK';

export const receiveTask = (task, oldListId) => ({
  type: RECEIVE_TASK,
  oldListId,
  task
});

export const removeTask = task => ({
  type: REMOVE_TASK,
  task
});

export const dropTask = (task, oldListId, taskId) => ({
  type: DROP_TASK,
  oldListId,
  taskId,
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

export const moveTask = (task, listId, taskId) => dispatch => {
  const oldListId = task.list_id;
  task.list_id = listId;
  TasksApiUtil.updateTask(task)
    .then(updatedTask => dispatch(dropTask(updatedTask, oldListId, taskId)));
};