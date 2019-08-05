import * as ApiUtil from '../util/listings_api_util';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS"; 
export const RECEIVE_LISTING = "RECEIVE_LISTING"


const receiveListing = (listing) => {
    debugger
    return({
        type: RECEIVE_LISTING, 
        listing
    })
}

const receiveListings = (listings) => {
    return({
        type: RECEIVE_LISTINGS, 
        listings
    })
}

export const fetchListings = () => dispatch => {
    return ApiUtil.fetchListings().then( (listings) => dispatch(receiveListings(listings)))
}

export const fetchListing = (id) => dispatch => {
    return ApiUtil.fetchListing(id).then( (listing) => dispatch(receiveListing(listing)))
}

