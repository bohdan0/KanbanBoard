export const fetchTask = id => (
  $.ajax({
    url: `/api/tasks/${ id }`,
    method: 'GET'
  })
);

export const createTask = task => (
  $.ajax({
    url: '/api/tasks',
    method: 'POST',
    data: { task }
  })
);

export const updateTask = task => (
  $.ajax({
    url: `/api/task/${ task.id }`,
    method: 'PATCH',
    data: { task }
  })
);

export const removeTask = id => (
  $.ajax({
    url: `/api/tasks/${ id }`,
    method: 'DELETE'
  })
);