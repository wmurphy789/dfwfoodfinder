import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS_BY_VENDOR_ID = "RECEIVE_REVIEWS_BY_VENDOR_ID";

const receiveReviewsByVendorId = (reviews) => {
  return ({
    type: RECEIVE_REVIEWS_BY_VENDOR_ID,
    reviews: reviews
  })
};

export const fetchReviewsByVendorId = vendorId => dispatch => {
  return ReviewApiUtil.fetchReviewsByVendorId(vendorId)
    .then(reviews => dispatch(receiveReviewsByVendorId(reviews)));
}
