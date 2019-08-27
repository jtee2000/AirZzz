import React from 'react';
import { Link } from 'react-router-dom'
import Listings from '../listings/listings_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, withRouter } from 'react-router-dom'; 
import { DateRangePicker, SingleDatePicker, DatePickerRangeController, DateRangePickerWrapper  } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import 'react-dates/initialize';

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.splash = this.splash.bind(this);
        this.loggedin = this.loggedin.bind(this);
        this.state = {
            search: "",
            startDate: null,
            endDate: null, 
            adults: 0, 
            children: 0, 
            infants: 0
        }
        this.handleEnter = this.handleEnter.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleEnter(e) {
        if (e.keyCode === 13) {
            this.setState({search: ""})
            this.props.history.push("/listings/map")
        }
    }

    toggleDropDown() {
        const drop = document.getElementById("dropdown");
        drop.classList.toggle("show");
        const chev = document.getElementById("icon");
        if (drop.classList.contains("show")) {
            chev.removeAttribute("class");
            chev.setAttribute("class", "fas fa-chevron-up");
        } else {
            chev.removeAttribute("class");
            chev.setAttribute("class", "fas fa-chevron-down");
        }


        window.onclick = function (e) {
            if (!e.target.matches(".homepage-guests") && !e.target.matches(".fas") && !e.target.matches(".homepage-guest-dropdown-content") && !e.target.matches(".buttons") && !e.target.matches(".homepage-button-styling") && !e.target.matches(".homepage-guest-counter") && !e.target.matches(".guests-select-container") && !e.target.matches(".guest-display-flex") && !e.target.matches(".adults") && !e.target.matches(".buttons-flex")) {
                var dropdowns = document.getElementsByClassName("homepage-guest-dropdown-content")[0];
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
        debugger
        switch (field) {
            case "adults":
                this.setState({ "adults": this.state.adults + 1 });
                // debugger
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
        switch (field) {
            case "adults":
                this.setState({ "adults": this.state.adults - 1 });
                break;
            case "children":
                this.setState({ "children": this.state.children - 1 });
                break;
            case "infants":
                this.setState({ "infants": this.state.infants - 1 });
                break;
        }
    }

    splash() {
        return (
            <>
                <div className="splash-background-image">
                    <nav className="nav-bar">
                        <div className="nav-bar-left">
                            <Link to="/listings">
                                <div className="logo">
                                    <img className="logo2" src={airTran} />
                                </div>
                            </Link>
                        </div>
                        <div className="nav-bar-text">
                            <div className="host-hover">
                                <span>Become a host</span>
                            </div>
                            <div className="host-hover">
                                <span>Help</span>
                            </div>
                            <div className="host-hover">
                                <button onClick={() => this.props.openModal('login')}>Login</button>
                            </div>
                            <div className="host-hover">
                                <button onClick={() => this.props.openModal('signup')}>Sign up</button>
                            </div>
                        </div>
                    </nav>
                    <div className="rental-form">
                        <h1>Book unique places to stay and things to do.</h1>
                        <div>
                            <label className="where">WHERE</label>
                            <input className="homepage-search-bar" type="text" placeholder="Anywhere" value={this.state.search} onChange={this.update("search")} onKeyUp={this.handleEnter} />
                        </div>
                        <div className="date-picker-homepage-container"> 
                            <div className="date-picker-homepage">
                                <label className="homepage-date-labels">CHECK-IN</label>
                                <SingleDatePicker
                                    numberOfMonths={1}
                                    date={this.state.startDate} // momentPropTypes.momentObj or null
                                    onDateChange={startDate => this.setState({ startDate })} // PropTypes.func.isRequired
                                    focused={this.state.temp2} // PropTypes.bool
                                    onFocusChange={({ focused: temp2 }) => this.setState({ temp2 })} // PropTypes.func.isRequired
                                    id="homepage" // PropTypes.string.isRequired,
                                    placeholder="mm/dd/yyyy"
                                />
                            </div>
                            <div className="date-picker-homepage">
                                <label className="homepage-date-labels">CHECKOUT</label>
                                <SingleDatePicker
                                    numberOfMonths={1}
                                    date={this.state.endDate}
                                    onDateChange={endDate => this.setState({ endDate })} // PropTypes.func.isRequired
                                    focused={this.state.temp} // PropTypes.bool
                                    onFocusChange={({ focused: temp }) => this.setState({ temp })} // PropTypes.func.isRequired
                                    id="homepage" // PropTypes.string.isRequired,
                                    placeholder={"mm/dd/yyyy"}
                                />  
                            </div>
                        </div>
                        <div id="homepage-guest-container">
                            <p className="where">GUESTS</p>
                            <div className="homepage-guest-dropdown">
                                <div className="guest-display-flex" onClick={this.toggleDropDown}>
                                    <span className="homepage-guests">{this.state.adults + this.state.children} {this.state.adults + this.state.children === 1 ? "Guest" : "Guests"}</span>
                                    {this.state.infants === 0 ? undefined : <span className="homepage-guests">{this.state.infants} {this.state.infants === 1 ? "Infant" : "Infants"}</span>}
                                    <i className="fas fa-chevron-down" id="icon"/>
                                </div>
                                <div id="dropdown" className="homepage-guest-dropdown-content">
                                    <div className="guests-select-container">
                                        <h2 className="adults">Adults</h2>
                                        <div className="buttons">
                                            <div className="buttons-flex">
                                                <button className={`homepage-button-styling ${this.state.adults > 0 ? undefined : "disabled"}`} onClick={() => this.buttonPressedMinus("adults")} id="adults+" disabled={this.state.adults === 0}>
                                                    -
                                                </button>
                                                <p className="homepage-guest-counter">{this.state.adults}</p>
                                                <button className="homepage-button-styling" onClick={() => this.buttonPressedPlus("adults")} id="adults-">
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
                                                <button className={`homepage-button-styling ${this.state.children > 0 ? undefined : "disabled"}`} onClick={() => this.buttonPressedMinus("children")} id="chidlren-" disabled={this.state.children === 0}>
                                                    -
                                                </button>
                                                <p className="homepage-guest-counter">{this.state.children}</p>
                                                <button className="homepage-button-styling" onClick={() => this.buttonPressedPlus("children")} id="children+">
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
                                                <button className={`homepage-button-styling ${this.state.infants > 0 ? undefined : "disabled"}`} onClick={() => this.buttonPressedMinus("infants")} id="infants-" disabled={this.state.infants === 0}>
                                                    -
                                                </button>
                                                <p className="homepage-guest-counter">{this.state.infants}</p>
                                                <button className="homepage-button-styling" onClick={() => this.buttonPressedPlus("infants")} id="infants+">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rental-form-container">
                            <button onClick={() => this.props.history.push("/listings/map")} className="homepage-button">   Search   </button>
                        </div>

                    </div>
                </div>
            </>
        )
    }

    


    loggedin() {
        return(
            <>
                <nav className="nav-bar-2">
                    <div className="nav-bar-left-2">
                        <Link to="/listings">
                            <div className="logo-2">
                                <img className="logo2-2" src={airTran2} />
                            </div>
                        </Link>
                        <div className="search-bar-2">
                            <i className="fas fa-search" ></i>
                            <input id="airzzz-search" type="text" placeholder="Try &quot;Boston College&quot;" value={this.state.search} onChange={this.update("search")} onKeyUp={this.handleEnter}/>
                        </div>
                    </div>
                    <div className="nav-bar-text-2">
                        <div className="host-hover-2">
                            <span>Add listing</span>
                        </div>
                        <div className="host-hover-2">
                            <span>Host</span>
                        </div>
                        <div className="host-hover-2">
                            <span>Saved</span>
                        </div>
                        <div className="host-hover-2">
                            <Link to="/listings/trips" className="remove-text-decoration">
                                <span>Trips</span>
                            </Link>
                        </div>
                        <div className="host-hover-2">
                            <span>Messages</span>
                        </div>
                        <div className="host-hover-2">
                            <span>Help</span>
                        </div>
                        <div className="host-hover-2">
                            <button className="header-button-2" onClick={() => this.props.logout().then(this.props.history.push("/"))}>Log Out</button>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
    render() {
        return (
            this.props.currentUser ?
                this.loggedin() :
                this.splash()
        );
    }


}


export default withRouter(Homepage); 