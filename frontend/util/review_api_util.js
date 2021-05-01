
export const fetchReviews = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/reviews`
  })
}

export const fetchReviewsByVendorId = (vendorId) => {
  return $.ajax({
    method: "GET",
    url: `/api/reviews?vendor_id=${vendorId}`
  });
}
