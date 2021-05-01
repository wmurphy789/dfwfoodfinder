
// signup

export const signUp = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  });
}

// login
export const logIn = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  });
}

// logout
export const logOut = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
}

// login vendor
export const logInVendor = vendor => {
  return $.ajax({
    method: 'POST',
    url: '/api/vendor/session',
    data: { vendor }
  });
}