import React from 'react'; 


class ListingShow extends React.Component {

    constructor(props) {
        super(props); 
        this.state = this.props.listing; 
    }

    componentDidMount() {
        debugger
        this.props.fetchListing(this.props.match.params.listingId).then( (listing) => {
            debugger
            const mapOptions = { 
                center: { lat: listing.listing.latitude, lng: listing.listing.longitude},
                zoom: 12
            }

            return this.map = new google.maps.Map(this.mapNode, mapOptions);
        }); 


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
                    <div className="photo-container-half1">
                        <img src={this.props.listing.photoUrl} alt=""/>
                    </div>
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
                            <p>{this.props.listing.description}</p>
                        </div>
                    </div>
                    
                    <div className="map-show-container">
                        <div className="listing-linebreak"></div>
                        <h1>The neighborhood</h1>
                        <div ref={map => this.mapNode = map} className="google-map">
                            <img src="https://developer.mozilla.org/en-US/" alt=""/>
                        </div>
                    </div>
                </div>
            </>
        )
    }


}

export default ListingShow;