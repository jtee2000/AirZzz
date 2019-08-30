import React from 'react'; 
import {Link} from 'react-router-dom';
import Rating from 'react-rating';

class ListingIndexItem extends React.Component {

    averageRating() {
        let sum = 0;
        const review = this.props.listing.reviews;
        if (this.props.listing.reviews === undefined) {
            return;
        }
        for (let i = 0; i < review.length; i++) {
            sum += review[i].accuracy;
            sum += review[i].communication;
            sum += review[i].cleanliness;
            sum += review[i].location;
            sum += review[i].check_in;
            sum += review[i].value;
        }
        return sum / (review.length * 5);
    }

    render() {
        return (
            <>
                <li className="listing-container">
                    <Link to={`/listings/show/${this.props.listing.id}`}>
                        <img className="listing-main-img" src={this.props.listing.photoUrl[0].service_url}/>
                        <div className="listing-details-container">
                            <p className="list-loc-ele">{this.props.listing.title.toUpperCase()}</p>
                            <p className="list-desc-ele">Boston College</p>
                            <p className="list-price-ele">${this.props.listing.price}/night</p>
                            {/* <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><span className="star-reviews"> No Reviews</span></span> */}
                            <div>
                                <Rating
                                    emptySymbol={<i className="fas fa-star gray-stars"></i>}
                                    initialRating={this.averageRating()}
                                    fullSymbol={<i className="fas fa-star blue-stars"></i>}
                                    readonly={true}
                                    className="playing-with-more-stars"
                                />
                                <span className="star-reviews">{this.props.listing.reviews.length === 0 ? "No" : this.props.listing.reviews.length} {this.props.listing.reviews.length === 1 ? "Review" : "Reviews"}</span>
                            </div>
                        </div>
                    </Link>
                </li>
            </>
        )
    }

}

export default ListingIndexItem; 