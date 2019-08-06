import { connect } from 'react-redux'; 
import Booking from './bookings';
import { createBooking } from '../../actions/booking_actions';

const msp = (state) => {
    return({
        booking: state.booking,
        user: state.entities.users[state.session.id]
    })
}

const mdp = (dispatch) => {
    return({
        processForm: (booking) => dispatch(createBooking(booking))
    })
}


export default connect(msp, mdp)(Booking);