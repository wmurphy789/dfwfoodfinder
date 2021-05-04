
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

// signup

export const signUpVendor = vendor => {
  const data = new FormData()
  for ( var key in vendor ) {
    console.log(vendor[key])
    data.append("vendor["+key+"]", vendor[key]);
  }
  console.log(JSON.stringify(data))
  return $.ajax({
    method: 'POST',
    processData: false,
    contentType: false,
    url: '/api/vendor/users',
    data: data
  });
}