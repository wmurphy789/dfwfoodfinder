import * as VendorApiUtil from '../util/vendor_api_util';

export const RECEIVE_ALL_VENDORS = 'RECEIVE_ALL_VENDORS';
export const RECEIVE_VENDOR = 'RECEIVE_VENDOR';
export const REMOVE_VENDOR = 'REMOVE_VENDOR';


// Regular action creators
const receiveAllVendors = (vendors) => {
  return ({
    type: RECEIVE_ALL_VENDORS,
    vendors: vendors
  });
};

const receiveVendor = vendor => {
  return ({
    type: RECEIVE_VENDOR,
    vendor: vendor
  });
}

const removeVendor = vendor => {
  return ({
    type: REMOVE_VENDOR,
    vendorId: vendor.id
  });
}

// Thunk action creators
export const fetchVendors = (filters) => dispatch => {
  return VendorApiUtil.fetchVendors(filters)
    .then(vendors => dispatch(receiveAllVendors(vendors)));
};

export const fetchVendorsByUserId = userId => dispatch => {
  return VendorApiUtil.fetchVendorsByUserId(userId)
    .then(vendors => dispatch(receiveAllVendors(vendors)));
}

export const fetchVendor = id => dispatch => {
  return VendorApiUtil.fetchVendor(id)
    .then(vendor => dispatch(receiveVendor(vendor)));
};

export const createVendor = vendor => dispatch => {
  return VendorApiUtil.createVendor(vendor)
    .then(vendor => dispatch(receiveVendor(vendor)));
};

export const updateVendor = vendor => dispatch => {
  return VendorApiUtil.updateVendor(vendor)
    .then(vendor => dispatch(receiveVendor(vendor)));
};

export const deleteVendor = id => dispatch => {
  return VendorApiUtil.deleteVendor(id)
    .then(vendor => dispatch(removeVendor(vendor)));
}