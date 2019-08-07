import { connect } from 'react-redux'; 
import Trips from './trips';
import { fetchBookings } from '../../actions/booking_actions';
import { fetchListing } from '../../actions/listing_actions'

const msp = (state) => {
    const bookings = state.entities.bookings || {};
    return({
        listing: state.entities.listings, 
        bookigs: bookings
    })
}; 


const mdp = (dispatch) => {
    return({
        fetchBookings: () => dispatch(fetchBookings()),
        fetchListing: (id) => dispatch(fetchListing(id)),
    })
}

export default connect(msp, mdp)(Trips);