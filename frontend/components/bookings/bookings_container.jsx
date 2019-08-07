import { connect } from 'react-redux'; 
import Booking from './bookings';
import { createBooking, fetchBookings } from '../../actions/booking_actions';
import { fetchListing } from '../../actions/listing_actions';

const msp = (state, ownProps) => {
    const listing = state.entities.listings[ownProps.listing_id] || {};
    const bookings = state.entities.bookings || {};
    return({
        user: state.entities.users[state.session.id],
        listing: listing, 
        bookings: bookings

    })
}

const mdp = (dispatch) => {
    return({
        processForm: (booking) => dispatch(createBooking(booking)),
        fetchListing: (id) => dispatch(fetchListing(id)),
        fetchBookings: () => dispatch(fetchBookings())
    })
}


export default connect(msp, mdp)(Booking);