import React from 'react';
import ListingIndexItem from './listing_index_item'; 


class Listings extends React.Component {

    componentDidMount() {
        this.props.fetchListings(); 
    }

    render() {
        debugger
        const listings = this.props.listings.map( (listing) => {
           return <ListingIndexItem listing={listing} key={listing.id}/>
        })
        return (
            <>
                <h1>Places to stay around the world</h1>
                <ul>
                    {listings}
                </ul>
            </>
        )
    }
}


export default Listings; 