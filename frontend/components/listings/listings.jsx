import React from 'react';
import ListingIndexItem from './listing_index_item'; 
import { Link } from 'react-router-dom';

class Listings extends React.Component {

    componentDidMount() {
        this.props.fetchListings(); 
    }

    render() {
        const listings = this.props.listings.map( (listing) => {
           return <ListingIndexItem listing={listing} key={listing.id}/>
        });
        return (
            <>
               
                    <div className="homepage-index-container">
                        <h1 className="listings-index-header">Places to stay around the world</h1>
                        <ul className="listing-index-container">
                            {listings}
                        </ul>
                    </div>
                
            </>
        )
    }
}


export default Listings; 