import { connect } from 'react-redux'; 
import Booking from './bookings';
import { createBooking } from '../../actions/booking_actions';
import { fetchListing } from '../../actions/listing_actions';

const msp = (state, ownProps) => {
    debugger
    const listing = state.entities.listings[ownProps.listing_id] || {};
    return({
        user: state.entities.users[state.session.id],
        listing: listing

    })
}

const mdp = (dispatch) => {
    return({
        processForm: (booking) => dispatch(createBooking(booking)),
        fetchListing: (id) => dispatch(fetchListing(id))
    })
}


export default connect(msp, mdp)(Booking);