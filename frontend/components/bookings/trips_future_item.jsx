import React from 'react'; 
import { Link } from 'react-router-dom';


class TripsFutureItem extends React.Component {

    constructor(props) {
        super(props);
        this.deleteReservation = this.deleteReservation.bind(this); 
    }


    deleteReservation() {
        this.props.deleteBooking(this.props.booking.id);
        location.reload(); 
    }



    render() {
        debugger
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var startDate = new Date(this.props.booking.start_date.split("/"))
        var endDate = new Date(this.props.booking.end_date.split("/"))
        return(
            <>
                <li className="trips-show-container">
                        <div className="trips-show-photo">
                            <img src={this.props.booking.service_url} alt=""/>
                        </div>
                        <div className="trip-details-show-container">
                            <span className="trip-booking-date">{months[startDate.getMonth()].toUpperCase()} {startDate.getDate()} - {months[endDate.getMonth()].toUpperCase()} {endDate.getDate()}</span>
                            <h1 className="trip-booking-header">{this.props.booking.title}</h1>
                            <h1 className="trip-house-reservation">1 house reservation</h1>
                            <div className="trip-details-show-line"></div>
                            <div className="next-trip-bottom-flex">
                                <Link to={`/listings/show/${this.props.booking.listing_id}`} className="trips-link-to-show">Show Listing</Link>
                                <span className="cancel-reservation" onClick={this.deleteReservation}>Cancel Reservation</span>
                            </div>
                        </div>
                </li>
            </>
        )
    }
}

export default TripsFutureItem;

