import React from 'react';
import { Link } from 'react-router-dom';

class ListingIndexMapItem extends React.Component {


    render() {
        return (
            <>
                <li className="listing-container">
                    <Link to={`/listings/${this.props.listing.id}`}>
                        <img className="listing-main-img" src="https://cdn.vox-cdn.com/thumbor/pe-W7fi9ELg9WZfEjkKAzr2VFa4=/0x0:4223x2815/1200x800/filters:focal(1775x1071:2449x1745)/cdn.vox-cdn.com/uploads/chorus_image/image/62616742/usa_today_10283452.0.jpg" />
                        <div className="listing-details-container">
                            <p className="list-loc-ele">{this.props.listing.title.toUpperCase()}</p>
                            <p className="list-desc-ele">Boston College</p>
                            <p className="list-price-ele">${this.props.listing.price}/night</p>
                            <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><span className="star-reviews"> No Reviews</span></span>
                        </div>
                    </Link>
                </li>
            </>
        )
    }

}

export default ListingIndexMapItem; 