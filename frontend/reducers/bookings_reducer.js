import { RECEIVE_BOOKING } from '../actions/booking_actions'; 


const bookingsReducer = (state = {}, action) => {
    const oldState = Object.freeze(state); 
    switch(action.type) {
        case RECEIVE_BOOKING: 
            return Object.assign({}, oldState, {[action.booking.id]: action.booking})
        default: 
            return oldState;
    }
}

export default bookingsReducer;