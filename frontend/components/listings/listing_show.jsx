import React from 'react'; 
import { showMore } from '../../util/show_more';
import Bookings from '../bookings/bookings_container';

class ListingShow extends React.Component {

    constructor(props) {
        super(props); 
    }

    componentDidMount() {
        this.props.fetchListing(this.props.match.params.listingId).then( (listing) => {
            const mapOptions = { 
                center: { lat: listing.listing.latitude, lng: listing.listing.longitude},
                zoom: 16
            }
            return this.map = new google.maps.Map(this.mapNode, mapOptions);
        }); 


    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.listingId !== this.props.match.params.listingId) {
            this.props.fetchListing(this.props.match.params.listingId); 
        }
    }

    getPhoto(ct, dir) {
        if (!this.props.listing.photoUrl) {
            return <div></div>
        } else {
            return <img className={`img-container`} src={this.props.listing.photoUrl[ct].service_url} />
        }
    }

    getShow(description) {
        if (description !== undefined) {
           return showMore(description);
        } else {
            return <div></div>;
        }
    }

    render() {
        return(
            <>
                <div className="photos-container">
                    <div className="photo-container-half1">
                        {this.getPhoto(0, "half")}
                    </div>
                   
                    <div className="photo-container-half2">
                        <div className="photo-quarter">
                            {this.getPhoto(1, "quarter")}
                        </div>
                        <div className="photo-quarter">
                            {this.getPhoto(2, "quarter")}
                        </div>
                        <div className="photo-quarter">
                            {this.getPhoto(3, "quarter")}
                        </div>
                        <div className="photo-quarter">
                            {this.getPhoto(4, "quarter")}
                        </div>
                    </div>
                </div>
                <div className="listing-show-body">
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
                                {/* <p>{this.props.listing.description}</p> */}
                                <div className="description-show">{this.getShow(this.props.listing.description)}</div>
                            </div>
                        </div>
                        
                        <div className="map-show-container">
                            <div className="listing-linebreak"></div>
                            <h1>The neighborhood</h1>
                            <div ref={map => this.mapNode = map} className="google-map">
                            </div>
                        </div>
                    </div>
                    <div className="booking-form-container">
                        <Bookings className="booking-form" listing_id={this.props.match.params.listingId} />
                    </div>
                </div> 
            </>
        )
    }


}

export default ListingShow;