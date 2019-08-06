import React from 'react'; 


class Booking extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            start_date: this.getDate(), 
            end_date: this.getDate(), 
            user_id: 0, 
            listing_id: 0,
            guests: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        debugger
        this.setState({user_id: this.props.user.id });
        const x = window.parseInt(this.props.listing_id, 10);
        this.setState({listing_id: x });
    }

    handleSubmit(e) {
        e.preventDefault(); 
        const booking = Object.assign({}, this.state);
        this.props.processForm(booking);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value})
        }
    }

    getDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; 
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }
        return today = yyyy + '-' + mm + '-' + dd;
    }



    render () {
        debugger
        return(
            <>
                <aside className="the-literal-literal-container">
                    <div className="booking-literal-form-container">
                        <div className="bookings-price-container"> 
                            <div className="bookings-span-mini-details">
                                <span className="bookings-price-header"><i class="fas fa-dollar-sign"></i>{this.props.listing.price} <span className="bookings-per-night"> per night</span></span>
                            </div>
                            <span id="bookings-show-star-reviews"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><span className="star-reviews"> No Reviews</span></span>
                            <div className="bookings-linebreak"></div>
                        </div>
                        <form onSubmit={this.handleSubmit} className="form-container">
                            <div className="bookings-details-container"><span></span><span></span></div>
                            <div className="date-inputs">
                                <label>Start Date
                                    <input type="date" onChange={this.update("start_date")} value={this.state.start_date || this.getDate()}/>
                                </label>
                                <label>End Date
                                    <input type="date" onChange={this.update("end_date")} value={this.state.end_date || this.getDate()}/>
                                </label>
                            </div>
                            <div>
                                <input className="reserve-button" type="submit" value="Reserve"/>
                            </div>
                        </form>
                    </div>

                </aside>
            </>
        )
    }


}



export default Booking; 