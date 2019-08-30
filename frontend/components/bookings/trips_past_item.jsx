import React from 'react';


class TripsPastItem extends React.Component {

    render() {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var startDate = new Date(this.props.booking.start_date.split("/"))
        return (
            <>
                <li className="trips-past-show-container">
                    <div className="trips-past-img-container">
                        <img src={this.props.booking.service_url} className="trips-past-img"/>
                    </div>
                    <div className="trip-past-details-show-container">
                        <p className="trips-date-past">{months[startDate.getMonth()].toUpperCase()} {startDate.getFullYear()}</p>
                        <h1>{this.props.booking.title}</h1>
                        <p className="trip-house-reservation">1 reservation</p>
                        <p className="trip-house-reservation hover-effect" style={{color: "#008489"}} onClick={() => this.props.openModal('review', this.props.booking.listing_id)}>Write a Review</p>

                    </div>
                </li>
            </>
        )
    }
}


export default TripsPastItem;