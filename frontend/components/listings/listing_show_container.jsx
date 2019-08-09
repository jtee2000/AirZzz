import { connect } from 'react-redux'; 
import ListingShow from './listing_show';
import { fetchListing } from '../../actions/listing_actions';
import { fetchBookings } from '../../actions/booking_actions';

const msp = (state, ownProps) => {
    const listing = state.entities.listings[ownProps.match.params.listingId] || {};
    const bookings = state.entities.bookings || {};
    return({
        listing: listing,
        bookings: bookings
    })
};

const mdp = (dispatch) => {
    return({
        fetchListing: (id) => dispatch(fetchListing(id)),
        fetchBookings: () => dispatch(fetchBookings())
    })
}; 


export default connect(msp, mdp)(ListingShow);