import { RECEIVE_BOOKING, RECEIVE_BOOKINGS } from '../actions/booking_actions'; 


const bookingsReducer = (state = {}, action) => {
    const oldState = Object.freeze(state); 
    switch(action.type) {
        case RECEIVE_BOOKING: 
            return Object.assign({}, oldState, {[action.booking.id]: action.booking})
        case RECEIVE_BOOKINGS: 
            return Object.assign({}, oldState, action.bookings)
        default: 
            return oldState;
    }
}

export default bookingsReducer;