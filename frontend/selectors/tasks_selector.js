export const selectTasks = (tasks, taskIds) => {
  let result = {};
  taskIds.forEach(taskId => {
    result[taskId] = tasks[taskId];
  });
  return result;
};