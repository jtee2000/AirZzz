import React from 'react'; 


class ListingShow extends React.Component {

    constructor(props) {
        super(props); 
        this.state = this.props.listing; 
    }

    componentDidMount() {
        this.props.fetchListing(this.props.match.params.listingId); 
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.listingId !== this.props.match.params.listingId) {
            this.props.fetchListing(this.props.match.params.listingId); 
        }
    }

    render() {
        return(
            <>
                <div className="photos-container">
                </div>
                <div className="listing-show-container">
                    <h1 className="listing-show-title">{this.props.listing.title}</h1>
                    <div className="listing-detail-container">
                        <div className="first-collection">
                            <i className="fas fa-home"></i>
                            <div className="listing-house-details-container">
                                <h1>Entire house</h1>
                                <span><span>{this.props.listing.guests} guests </span><span>{this.props.listing.bedrooms} bedrooms </span><span>{this.props.listing.beds} beds </span><span>{this.props.listing.baths} baths</span></span>
                            </div>
                        </div>
                        <div className="listing-linebreak"></div>
                        <div className="listing-show-description">
                            <p>{simple_formatthis.props.listing.description}</p>
                        </div>
                    </div>
                    <div className="">

                    </div>
                </div>
            </>
        )
    }


}

export default ListingShow;