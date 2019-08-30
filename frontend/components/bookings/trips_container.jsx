import { connect } from 'react-redux'; 
import Trips from './trips';
import { fetchBookings, deleteBooking } from '../../actions/booking_actions';
import { fetchListings } from '../../actions/listing_actions';
import { closeModal, openModal } from '../../actions/modal_actions';


const msp = (state) => {
    const bookings = state.entities.bookings || {};
    const listings = state.entities.listings || {};
    return({
        listing: listings, 
        bookings: bookings,
        user: state.session.id,
    })
}; 


const mdp = (dispatch) => {
    return({
        fetchBookings: () => dispatch(fetchBookings()),
        fetchListings: () => dispatch(fetchListings()),
        deleteBooking: (id) => dispatch(deleteBooking(id)), 
        closeModal: () => dispatch(closeModal()), 
        openModal: (modal, id) => dispatch(openModal(modal, id)),


        
    })
}

export default connect(msp, mdp)(Trips);