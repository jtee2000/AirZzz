import { connect } from 'react-redux'; 
import Listings from './listings';
import { fetchListings } from '../../actions/listing_actions';

const msp = (state) => {
    debugger
    return({
        listings: Object.keys(state.entities.listings).map(id => state.entities.listings[id]),
        user: state.entities.users[state.session.id]
    })
}

const mdp = (dispatch) => {
    return({
        fetchListings: () => dispatch(fetchListings())
    })
}

export default connect(msp, mdp)(Listings);