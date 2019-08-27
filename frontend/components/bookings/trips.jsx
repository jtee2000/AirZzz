import React from 'react'; 
import TripsFutureItem from './trips_future_item';
import TripsPastItem from './trips_past_item';
import { Link } from 'react-router-dom';

class Trips extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
        this.hasBookings = this.hasBookings.bind(this);
        this.noBookings = this.noBookings.bind(this); 
        this.yesBookings = this.yesBookings.bind(this); 
        this.hasPastBookings = this.hasPastBookings.bind(this);
        this.yesPastBookings = this.yesPastBookings.bind(this);
    }

    componentDidMount() {
        this.props.fetchBookings(); 
    }

    hasBookings() {
        for (let i = 0; i < Object.keys(this.props.bookings).length; i++) {
            if (Object.values(this.props.bookings)[i].user_id === this.props.user) {
                if (Date.parse(Object.values(this.props.bookings)[i].start_date) > this.state.date.getTime()) {
                    return true; 
                }
            }
        }
        return false; 
    }

    hasPastBookings() {
        for (let i = 0; i < Object.keys(this.props.bookings).length; i++) {
            if (Object.values(this.props.bookings)[i].user_id === this.props.user) {
                if (Date.parse(Object.values(this.props.bookings)[i].start_date) < this.state.date.getTime()) {
                    return true;
                }
            }
        }
        return false; 
    }

    yesPastBookings() {
        const past_bookings = Object.keys(this.props.bookings).map((id) => {
            if (this.props.bookings[id].user_id === this.props.user) {
                if (Date.parse(this.props.bookings[id].start_date) < this.state.date)
                    return <TripsPastItem key={id} booking={this.props.bookings[id]} />
            }
        })
        return(
            <div>
                <div>
                    <h1 className="where-you-been">Where you've been</h1>
                </div>
                <ul className="trips-past-container">
                    {past_bookings}
                </ul>
            </div>
        )
    }

    noBookings() {
        return(
            <>
                <h1 className="your-next-trip">Upcoming Plans</h1>
                <p className="no-upcoming-trips"> You have no upcoming trips. Start exploring ideas for your next trip</p>
                <Link to={"/listings"} className="explore-airbnb-button">Explore Airbnb</Link>
                <img src="https://airzzz-seeds.s3.amazonaws.com/upcoming_plans.png" alt=""/>

            </>
        )
    }

    yesBookings() {
        const future_bookings = Object.keys(this.props.bookings).map((id) => {
            if (this.props.bookings[id].user_id === this.props.user) {
                if (Date.parse(this.props.bookings[id].start_date) > this.state.date.getTime()) {
                    return <TripsFutureItem key={id} booking={this.props.bookings[id]} deleteBooking={this.props.deleteBooking}/>
                }
            }
        })
        return(
            <div className="trips-future-background-color">
                <div>
                    <h1 className="your-next-trip">Your next trip</h1>
                </div>
                <div>
                    <ul className="trips-future-container">
                        {future_bookings}
                    </ul>
                </div>
            </div>
        )
    }


    render () {
        // const future_bookings = Object.keys(this.props.bookings).map( (id) => {
        //     if (this.props.bookings[id].user_id === this.props.user) {
        //         if (Date.parse(this.props.bookings[id].start_date) > this.state.date.getTime()) {
        //             return <TripsFutureItem key={id} booking={this.props.bookings[id]}/>
        //         }
        //     }
        // })

        const past_bookings = Object.keys(this.props.bookings).map((id) => {
            if (this.props.bookings[id].user_id === this.props.user) {
                if (Date.parse(this.props.bookings[id].start_date) < this.state.date)
                    return <TripsPastItem key={id} booking={this.props.bookings[id]} />
            }
        })
        return (
            <>
                {/* <div className="trips-future-background-color">
                    <div>
                        <h1 className="your-next-trip">Your next trip</h1>
                    </div>
                    <div>
                        <ul className="trips-future-container">
                            {future_bookings}
                        </ul>
                    </div>
                </div> */}
                {this.hasBookings() ? this.yesBookings() : this.noBookings()}
                {this.hasPastBookings() ? this.yesPastBookings() : ""}
                {/* <div>
                    <div>
                        <h1 className="where-you-been">Where you've been</h1>
                    </div>
                    <ul className="trips-past-container">
                        {past_bookings}
                    </ul>
                </div> */}
            </>
        )
    }
}


export default Trips; 
