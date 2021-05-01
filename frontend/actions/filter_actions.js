import { fetchVendors } from "./vendor_actions";

export const UPDATE_FILTER = "UPDATE_FILTER"; 

const changeFilter = (filter, value) => {
  return ({
    type: UPDATE_FILTER,
    filter,
    value
  });
}

// const changeSearchFilter = (coords) => {
//   return ({
//     type: UPDATE_SEARCH_FILTER,
//     searchLocation: coords
//   });
// }

export const updateFilter = (filter, value) => {
  return (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchVendors(getState().ui.filters)(dispatch);
  }
};