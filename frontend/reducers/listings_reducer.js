import {RECEIVE_LISTING, RECEIVE_LISTINGS } from '../actions/listing_actions';


const listingsReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch(action.type) {
        case RECEIVE_LISTINGS: 
            return Object.assign({}, oldState, action.listings)
        case RECEIVE_LISTING: 
            return Object.assign({}, oldState, {[action.listing.id]: action.listing});
        default: 
            return oldState; 
    }
}

export default listingsReducer; 