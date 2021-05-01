export const RECEIVE_CHECKOUT_INFO = 'RECEIVE_CHECKOUT_INFO';

export const receiveCheckoutInfo = bookingParams => {
  return ({
    type: RECEIVE_CHECKOUT_INFO,
    bookingParams: { [bookingParams.vendor_id]: bookingParams}
  })
}
