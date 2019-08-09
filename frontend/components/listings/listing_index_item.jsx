import React from 'react'; 
import {Link} from 'react-router-dom';

class ListingIndexItem extends React.Component {


    render() {
        return (
            <>
                <li className="listing-container">
                    <Link to={`/listings/${this.props.listing.id}`}>
                        <img className="listing-main-img" src={this.props.listing.photoUrl[0].service_url}/>
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

export default ListingIndexItem; 