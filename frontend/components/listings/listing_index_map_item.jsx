import React from 'react';
import { Link } from 'react-router-dom';

class ListingIndexMapItem extends React.Component {


    render() {
        return (
            <>
                <li className="map-listing-container">
                    <Link to={`/listings/show/${this.props.listing.id}`}>
                        <div className="map-flexing-container">
                            <div className="map-listing-main-img-container">
                                <img className="map-listing-main-img" src={this.props.listing.photoUrl[0].service_url} />
                            </div>
                            <div className="map-listing-details-container">
                                <div>
                                    <p className="list-loc-ele">{this.props.listing.title.toUpperCase()}</p>
                                    <p className="list-desc-ele">Boston College</p>
                                    <span className="map-listing-span"><span>{this.props.listing.guests} guests </span><span>{this.props.listing.bedrooms} bedrooms </span><span>{this.props.listing.beds} beds </span><span>{this.props.listing.baths} baths</span></span>
                                </div>
                                <div className="map-ratings-price-flex">
                                    <span className="map-listing-i"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><span className="star-reviews"> No Reviews</span></span>
                                    <p className="list-price-ele">${this.props.listing.price}/night</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                </li>
            </>
        )
    }

}

export default ListingIndexMapItem; 