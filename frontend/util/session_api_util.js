export const logIn = user => (
  $.ajax({
    url: '/api/sessions',
    method: 'POST',
    data: { user }
  })
);

export const signUp = user => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  })
);

export const logOut = () => (
  $.ajax({
    url: '/api/sessions',
    method: 'DELETE'
  })
);