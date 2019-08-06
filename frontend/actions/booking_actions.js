import * as ApiUtil from '../util/bookings_api_util'; 


export const RECEIVE_BOOKING = "RECEIVE_BOOKING"; 


const receiveBooking = (booking) => {
    return({
        type: RECEIVE_BOOKING, 
        booking
    })
}


export const createBooking = (booking) => dispatch => {
    return ApiUtil.createBooking(booking).then( (booking) => dispatch(receiveBooking(booking)))
}

