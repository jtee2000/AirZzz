import React from 'react'; 
import { showMore } from '../../util/show_more';
import Bookings from '../bookings/bookings_container';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import Rating from 'react-rating';
import ReviewItem from '../reviews/review_item'; 

class ListingShow extends React.Component {

    constructor(props) {
        super(props); 
        this.isDayBlocked = this.isDayBlocked.bind(this);
        this.reviewItem = this.reviewItem.bind(this);
    }

    componentDidMount() {
        this.props.fetchBookings();
        this.props.fetchListing(this.props.match.params.listingId).then( (listing) => {
            const mapOptions = { 
                center: { lat: listing.listing.latitude, lng: listing.listing.longitude},
                zoom: 16
            }
            this.map = new google.maps.Map(this.mapNode, mapOptions);
            new google.maps.Circle({
                strokeColor: '#00A699',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#008489',
                fillOpacity: 0.15,
                map: this.map,
                center: { lat: listing.listing.latitude, lng: listing.listing.longitude },
                radius: 120
            });
            // new google.maps.Marker({
            //     position: { lat: listing.listing.latitude, lng: listing.listing.longitude }, 
            //     map: this.map
            // })
        }); 


    }

    isDayBlocked(date) {
        const formatted = moment(date).format("YYYY-MM-DD");

        for (let i = 1; i < Object.keys(this.props.bookings).length + 1; i++) {
            if (!Object.values(this.props.bookings)[i]) break;
            if (formatted >= Object.values(this.props.bookings)[i].start_date && formatted <= Object.values(this.props.bookings)[i].end_date && this.props.listing.id === Object.values(this.props.bookings)[i].listing_id) {
                return true;
            }
        }

    }

    isOutsideRange(date) {
        if (date < new Date()) {
            return true; 
        }
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
        return sum/(review.length*5); 
    }

    individualRating(field) {
        let sum = 0; 
        const review = this.props.listing.reviews; 
        for (let i = 0; i < review.length; i++) {
            sum+= review[i][field]; 
        }
        return sum/review.length
    }

    reviewItem() {
        return this.props.listing.reviews.map( (review, idx) => {
            if (idx === this.props.listing.reviews.length - 1) {
                    return <ReviewItem review ={ review } key ={ review.id } listing = { this.props.listing } verify={"hello"}/>
            }
            return <ReviewItem review={review} key={review.id} listing={this.props.listing} verify={"bye"}/>
        })
    }

    s() {
        if (this.props.listing.reviews.length === 1) {
            return "Review";
        } else {
            return "Reviews"
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
                        <h2 className="city">Boston</h2>
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
                        <div className="listing-availability-container">
                            <div className="listing-linebreak"></div>
                            <h1 className="availability">Availability</h1>
                            <div className="calendar_container">
                                <DayPickerRangeController
                                    numberOfMonths={2}
                                    isDayBlocked={this.isDayBlocked}
                                    isOutsideRange={this.isOutsideRange}
                                    // startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                    // endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                    // onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                                    // focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                    // onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                                    // initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
                                />
                            </div>
                        </div>
                        <div className="show-reviews-container">
                            <div className="listing-linebreak"></div>
                            <div className="show-reviews-flex">
                                <h1 className="availability" id="show-reviews-title">{this.props.listing.reviews ? this.props.listing.reviews.length : undefined} {this.props.listing.reviews ? this.s() : undefined}</h1>
                                <div className="margin">
                                    <Rating
                                        emptySymbol={<i className="fas fa-star gray-stars"></i>}
                                        initialRating={this.props.listing.reviews ? this.averageRating() : 0}
                                        readonly={true}
                                        fullSymbol={<i className="fas fa-star blue-stars"></i>}
                                    />
                                </div>
                            </div>
                            <div className="listing-linebreak"></div>
                            <div className="reviews-container-2">
                                <div className="reviews-secondary-container-2">
                                    <h1>Accuracy</h1>
                                    <Rating
                                        emptySymbol={<i className="fas fa-star gray-stars"></i>}
                                        initialRating={this.props.listing.reviews ? this.individualRating("accuracy") : 0}
                                        fullSymbol={<i className="fas fa-star blue-stars"></i>}
                                        readonly={true}
                                    />
                                </div>
                                <div className="reviews-secondary-container-2">
                                    <h1>Communication</h1>
                                    <Rating
                                        emptySymbol={<i className="fas fa-star gray-stars"></i>}
                                        initialRating={this.props.listing.reviews ? this.individualRating("communication") : 0}
                                        fullSymbol={<i className="fas fa-star blue-stars"></i>}
                                        readonly={true}
                                    />
                                </div>
                                <div className="reviews-secondary-container-2">
                                    <h1>Cleanliness</h1>
                                    <Rating
                                        emptySymbol={<i className="fas fa-star gray-stars"></i>}
                                        initialRating={this.props.listing.reviews ? this.individualRating("cleanliness") : 0}
                                        fullSymbol={<i className="fas fa-star blue-stars"></i>}
                                        readonly={true}
                                    />
                                </div>
                                <div className="reviews-secondary-container-2">
                                    <h1>Location</h1>
                                    <Rating
                                        emptySymbol={<i className="fas fa-star gray-stars"></i>}
                                        initialRating={this.props.listing.reviews ? this.individualRating("location") : 0}
                                        fullSymbol={<i className="fas fa-star blue-stars"></i>}
                                        readonly={true}
                                    />
                                </div>
                                <div className="reviews-secondary-container-2">
                                    <h1>Check-In</h1>
                                    <Rating
                                        emptySymbol={<i className="fas fa-star gray-stars"></i>}
                                        initialRating={this.props.listing.reviews ? this.individualRating("check_in") : 0}
                                        fullSymbol={<i className="fas fa-star blue-stars"></i>}
                                        readonly={true}
                                    />
                                </div>
                                <div className="reviews-secondary-container-2">
                                    <h1>Value</h1>
                                    <Rating
                                        emptySymbol={<i className="fas fa-star gray-stars"></i>}
                                        initialRating={this.props.listing.reviews ? this.individualRating("value") : 0}
                                        fullSymbol={<i className="fas fa-star blue-stars"></i>}
                                        readonly={true}
                                    />
                                </div>
                            </div>
                            {this.props.listing.reviews ? this.reviewItem() : undefined}
                        </div>
                        
                        <div className="map-show-container">
                            <div className="listing-linebreak"></div>
                            <h1>The neighborhood</h1>
                            <div ref={map => this.mapNode = map} className="google-map">
                            </div>
                        </div>
                    </div>
                    <div className="booking-form-container">
                        <Bookings className="booking-form" listing_id={this.props.match.params.listingId} rating={this.averageRating()} count={this.props.listing.reviews ? this.props.listing.reviews.length : undefined}/>
                    </div>
                </div> 
            </>
        )
    }


}

export default ListingShow;