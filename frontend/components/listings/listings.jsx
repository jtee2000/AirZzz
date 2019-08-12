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
            <aside>
               
                    <div className="homepage-index-container">
                        {/* <h1 className="listings-index-header">What can we help you find, {this.props.user.fname.split(" ").join("")}?</h1> */}
                        <h1 className="listings-index-header">Places to stay around the world</h1>
                        <ul className="listing-index-container">
                            {listings}
                        </ul>
                    </div>
                
            </aside>
        )
    }
}


export default Listings; 