
export const fetchAllBookings = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/bookings`
  })
}

export const fetchBookingByBookingId = bookingId => {
  return $.ajax({
    method: 'GET',
    url: `/api/bookings/${bookingId}`
  })
}

export const fetchBookingsByUserId = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/bookings?userId=${userId}`
  })
}

export const fetchBookingsByVendorId = vendorId => {
  return $.ajax({
    method: 'GET',
    url: `/api/bookings?vendorId=${vendorId}`
  });
}

export const createBooking = booking => {
  return $.ajax({
    method: 'POST',
    url: `/api/bookings`,
    data: { booking }
  })
}

export const deleteBooking = bookingId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bookings/${bookingId}`
  });
}

