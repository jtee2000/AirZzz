import { connect } from 'react-redux'; 
import ListingMap from './listing_map';
import { fetchListings } from '../../actions/listing_actions';
import { updateBounds } from '../../actions/filter_actions'

const msp = (state) => {
    const listings = state.entities.listings || {};
    return({
        listings
    })
};

const mdp = (dispatch) => {
    return({
        fetchListings: () => dispatch(fetchListings()),
        updateFilter: (filter, value) => dispatch(updateBounds(filter, value))
    })
}; 

export default connect(msp, mdp)(ListingMap);