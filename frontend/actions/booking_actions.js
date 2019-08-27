import * as ApiUtil from '../util/bookings_api_util'; 


export const RECEIVE_BOOKING = "RECEIVE_BOOKING"; 
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";

const receiveBooking = (booking) => {
    return({
        type: RECEIVE_BOOKING, 
        booking
    })
}

const receiveBookings = (bookings) => {
    return({
        type: RECEIVE_BOOKINGS,
        bookings
    })
}


export const createBooking = (booking) => dispatch => {
    return ApiUtil.createBooking(booking).then( (booking) => dispatch(receiveBooking(booking)))
}

export const fetchBookings = () => dispatch => {
    return ApiUtil.fetchBookings().then( (bookings) => dispatch(receiveBookings(bookings)))
}

export const deleteBooking = (id) => dispatch => {
    return ApiUtil.deleteBooking(id).then( () => dispatch(receiveBooking({})))
}


