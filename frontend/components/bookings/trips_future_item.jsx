import React from 'react'; 
import { Link } from 'react-router-dom';


class TripsFutureItem extends React.Component {




    render() {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        debugger
        var startDate = new Date(this.props.booking.start_date.split("/"))
        var endDate = new Date(this.props.booking.end_date.split("/"))
        return(
            <>
                <li className="trips-show-container">
                        <div className="trips-show-photo">
                            <img src={this.props.booking.service_url} alt=""/>
                        </div>
                        <div className="trip-details-show-container">
                            <span className="trip-booking-date">{months[startDate.getMonth()].toUpperCase()} {startDate.getDay()} - {months[endDate.getMonth()].toUpperCase()} {endDate.getDay()}</span>
                            <h1 className="trip-booking-header">{this.props.booking.title}</h1>
                            <h1 className="trip-house-reservation">1 house reservation</h1>
                            <div className="trip-details-show-line"></div>
                            <Link to={`/listings/${this.props.booking.listing_id}`} className="trips-link-to-show">Show Listing</Link>
                        </div>
                </li>
            </>
        )
    }
}

export default TripsFutureItem;

