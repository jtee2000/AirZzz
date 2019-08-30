import {connect} from 'react-redux'; 
import Reviews from './reviews';
import { createReview } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions'


const msp = (state) => {
    return({
        id: state.ui.modal.listing_id
    })
}; 


const mdp = (dispatch) => {
    return({
        createReview: (review) => createReview(review),
        closeModal: () => dispatch(closeModal()),
    })
}; 


export default connect(msp, mdp)(Reviews);


