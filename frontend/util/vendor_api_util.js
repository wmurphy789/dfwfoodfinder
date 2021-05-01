
export const fetchVendors = (filters) => {
  return $.ajax({
    method: "GET",
    url: `/api/vendors?bounds=${JSON.stringify(filters.bounds)}`
  });
}

export const fetchVendorsByUserId = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/vendors?user_id=${userId}`
  })
}
export const fetchVendor = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/vendors/${id}`
  });
}

export const createVendor = vendor => {
  return $.ajax({
    method: 'POST',
    url: `/api/vendors`,
    data: { vendor }
  });
}

export const updateVendor = vendor => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/vendors/${vendor.id}`,
    data: { vendor }
  });
}

export const deleteVendor = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/vendors/${id}`
  });
}