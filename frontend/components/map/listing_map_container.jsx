import { connect } from 'react-redux'; 
import ListingMap from './listing_map';
import { fetchListings } from '../../actions/listing_actions';

const msp = (state) => {
    const listings = state.entities.listings || {};
    return({
        listings
    })
};

const mdp = (dispatch) => {
    return({
        fetchListings: () => dispatch(fetchListings())
    })
}; 

export default connect(msp, mdp)(ListingMap);