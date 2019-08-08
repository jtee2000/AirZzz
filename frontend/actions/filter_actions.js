import { fetchBoundListings } from './listing_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";


const updateFilter = (filter, value) => {
    return({
        type: UPDATE_FILTER, 
        filter, 
        value
    })
}


export const updateBounds = (filter, value) => (dispatch, getState) => {
    dispatch(updateFilter(filter, value));
    return fetchBoundListings(getState().ui.filters)(dispatch)
}