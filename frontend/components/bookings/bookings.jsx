import React from 'react'; 
import { withRouter } from 'react-router-dom';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
class Booking extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: null, 
            endDate: null, 
            user_id: 0, 
            listing_id: 0,
            guests: 0,
            adults: 0, 
            children: 0, 
            infants: 0, 
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isDayBlocked = this.isDayBlocked.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.buttonPressedPlus = this.buttonPressedPlus.bind(this);
        this.buttonPressedMinus = this.buttonPressedMinus.bind(this);
    }

    componentDidMount() {
        this.props.fetchBookings();
        const x = window.parseInt(this.props.listing_id, 10);
        this.setState({listing_id: x });
    }

    handleSubmit(e) {
        e.preventDefault(); 
        if (!this.props.user) {
            this.props.openModal('signup');
            return;
        }
        // const start_date = moment(this.state.startDate).format("YYYY/MM/DD");
        // const end_date = moment(this.state.endDate).format("YYYY/MM/DD");
        // this.setState({start_date: start_date}); 
        // this.setState({end_date: end_date});
        // const booking = Object.assign({}, this.state);
        const { startDate, endDate, listing_id, guests} = this.state; 
        this.setState({guests: this.state.adults + this.state.children + this.state.infants})
        this.props.processForm({
            start_date: moment(startDate).format("YYYY-MM-DD"),
            end_date: moment(endDate).format("YYYY-MM-DD"),
            listing_id,
            guests
        }).then( () => this.props.history.push("/listings/trips"));
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

    isDayBlocked(date) {
        const formatted = moment(date).format("YYYY-MM-DD");
        for (let i = 1; i < Object.keys(this.props.bookings).length + 1; i++) {
            if (!Object.values(this.props.bookings)[i]) break; 
            if (formatted >= Object.values(this.props.bookings)[i].start_date && formatted <= Object.values(this.props.bookings)[i].end_date && this.props.listing.id === Object.values(this.props.bookings)[i].listing_id) {
                return true; 
            }
        }

    }

    toggleDropDown() {
        const drop = document.getElementById("dropdown");
        drop.classList.toggle("show");
        const chev = document.getElementById("chev"); 
        if (drop.classList.contains("show")) {
            chev.removeAttribute("class");
            chev.setAttribute("class", "fas fa-chevron-up");
        } else {
            chev.removeAttribute("class");
            chev.setAttribute("class", "fas fa-chevron-down");
        }

        window.onclick = function(e) {
            if (!e.target.matches(".guests") && !e.target.matches(".fas") && !e.target.matches(".guest-dropdown-content") && !e.target.matches(".buttons") && !e.target.matches(".button-styling") && !e.target.matches(".guest-counter") && !e.target.matches(".button-styling") && !e.target.matches("guests-select-container")) {
                var dropdowns = document.getElementsByClassName("guest-dropdown-content")[0];
                if (dropdowns.classList.contains('show')) {
                    dropdowns.classList.remove('show');
                }
            }
            if (drop.classList.contains("show")) {
                chev.removeAttribute("class");
                chev.setAttribute("class", "fas fa-chevron-up");
            } else {
                chev.removeAttribute("class");
                chev.setAttribute("class", "fas fa-chevron-down");
            }
        }
    }

    buttonPressedPlus(field) {
        const element = document.getElementById(`${field}+`);
        switch(field) {
            case "adults": 
            this.setState({"adults": this.state.adults + 1});
            // if (element.classList.contains("disabled") && this.state[field] > 0) {
            //     element.classList.remove('disabled');
            // }
            break;
            case "children":
                this.setState({ "children": this.state.children + 1 });
                break;
            case "infants":
                this.setState({ "infants": this.state.infants + 1 });
                break;   
        }
    }

    buttonPressedMinus(field) {
        switch(field) {
            case "adults": 
                this.setState({"adults": this.state.adults - 1});
                break;
            case "children": 
                this.setState({"children": this.state.children - 1});
                break; 
            case "infants": 
                this.setState({"infants": this.state.infants - 1});
                break; 
        }
    }



    render () {
        return(
            <>
                <aside className="the-literal-literal-container">
                    <div className="booking-literal-form-container">
                        <div className="bookings-price-container"> 
                            <div className="bookings-span-mini-details">
                                <span className="bookings-price-header"><i className="fas fa-dollar-sign"></i>{this.props.listing.price} <span className="bookings-per-night"> per night</span></span>
                            </div>
                            <span id="bookings-show-star-reviews"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><span className="star-reviews"> No Reviews</span></span>
                            <div className="bookings-linebreak"></div>
                        </div>
                        <div className="date-picker-calendar">
                        <p>Dates</p>
                        <DateRangePicker
                            isDayBlocked={this.isDayBlocked}
                            numberOfMonths={1}
                            startDatePlaceholderText="Check-In"
                            endDatePlaceholderText="Checkout"
                            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        />
                        </div>
                        <div className="guest-container">
                            <p className="guest-label">Guests</p>
                            <div className="guest-dropdown" >
                                <div className="guest-display-flex" onClick={this.toggleDropDown}>
                                        <span className="guests">{this.state.adults + this.state.children} {this.state.adults + this.state.children === 1 ? "Guest" : "Guests"}</span>
                                        {this.state.infants === 0 ? undefined : <span className="guests">{this.state.infants} {this.state.infants === 1 ? "Infant" : "Infants"}</span>}
                                    <i className="fas fa-chevron-down" id="chev"/>
                                </div>
                                <div id="dropdown" className="guest-dropdown-content">
                                    <div className="guests-select-container">
                                        <h2 className="adults">Adults</h2>
                                        <div className="buttons">
                                            <div className="buttons-flex">
                                                <button className={`button-styling ${this.state.adults > 0 ? undefined: "disabled"}`} onClick={() => this.buttonPressedMinus("adults")} id="adults+" disabled={this.state.adults === 0}>
                                                    -
                                                </button>
                                                <p className="guest-counter">{this.state.adults}</p>
                                                <button className="button-styling" onClick={() => this.buttonPressedPlus("adults")} id="adults-">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="guests-select-container">
                                        <div>
                                            <h2 className="adults">Children</h2>
                                            <h3 className="guest-restrictions">Ages 2-12</h3>
                                        </div>
                                        <div className="buttons">
                                            <div className="buttons-flex">
                                                <button className={`button-styling ${this.state.children > 0 ? undefined : "disabled"}`} onClick={() => this.buttonPressedMinus("children")} id="chidlren-" disabled={this.state.children === 0}>
                                                    -
                                                </button>
                                                <p className="guest-counter">{this.state.children}</p>
                                                <button className="button-styling" onClick={() => this.buttonPressedPlus("children")} id="children+">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="guests-select-container">
                                        <div>
                                            <h2 className="adults">Infants</h2>
                                            <h3 className="guest-restrictions">Under 2</h3>
                                        </div>
                                        <div className="buttons">
                                            <div className="buttons-flex">
                                                <button className={`button-styling ${this.state.infants > 0 ? undefined : "disabled"}`} onClick={() => this.buttonPressedMinus("infants")} id="infants-" disabled={this.state.infants === 0}>
                                                    -
                                                </button>
                                                <p className="guest-counter">{this.state.infants}</p>
                                                <button className="button-styling" onClick={() => this.buttonPressedPlus("infants")} id="infants+">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={this.handleSubmit} className="form-container">
                            {/* <div className="bookings-details-container"><span></span><span></span></div>
                            <div className="date-inputs">
                                <label>Start Date
                                    <input type="date" onChange={this.update("start_date")} value={this.state.start_date || this.getDate()}/>
                                </label>
                                <label>End Date
                                    <input type="date" onChange={this.update("end_date")} value={this.state.end_date || this.getDate()}/>
                                </label>
                            </div> */}
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



export default withRouter(Booking); 