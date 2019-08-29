import {connect} from 'react-redux'; 
import Reviews from './reviews';
import { createReview } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions'


const msp = (state) => {
    return({

    })
}; 


const mdp = (dispatch) => {
    return({
        createReview: (review) => dispatch(createReview(review)),
        closeModal: () => dispatch(closeModal()),
    })
}; 


export default connect(msp, mdp)(Reviews);


