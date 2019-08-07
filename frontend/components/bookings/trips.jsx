import React from 'react'; 
import TripsFutureItem from './trips_future_item';
import TripsPastItem from './trips_past_item';

class Trips extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        debugger
        this.props.fetchBookings(); 
    }


    render () {
        debugger
        const future_bookings = Object.keys(this.props.bookings).map( (id) => {
            if (this.props.bookings[id].user_id === this.props.user) {
                if (Date.parse(this.props.bookings[id].start_date) > this.state.date.getTime()) {
                    return <TripsFutureItem key={id} booking={this.props.bookings[id]}/>
                }
            }
        })

        const past_bookings = Object.keys(this.props.bookings).map((id) => {
            if (this.props.bookings[id].user_id === this.props.user) {
                if (Date.parse(this.props.bookings[id].start_date) < this.state.date)
                    return <TripsPastItem key={id} booking={this.props.bookings[id]} />
            }
        })
        debugger
        return (
            <>
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
                <div>
                    <div>
                        <h1 className="where-you-been">Where you've been</h1>
                    </div>
                    <ul className="trips-past-container">
                        {past_bookings}
                    </ul>
                </div>
            </>
        )
    }
}


export default Trips; 
