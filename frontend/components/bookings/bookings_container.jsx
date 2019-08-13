import { connect } from 'react-redux'; 
import Booking from './bookings';
import { createBooking, fetchBookings } from '../../actions/booking_actions';
import { fetchListing } from '../../actions/listing_actions';
import { openModal } from '../../actions/modal_actions';

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
        fetchBookings: () => dispatch(fetchBookings()),
        openModal: modal => dispatch(openModal(modal))
    })
}


export default connect(msp, mdp)(Booking);