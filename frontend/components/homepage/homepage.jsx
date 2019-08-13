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
            endDate: null
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
            debugger
            this.props.history.push("/listings/map")
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
                                    // date={this.state.date} // momentPropTypes.momentObj or null
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
                                    onDateChange={endDate => this.setState({ endDate })} // PropTypes.func.isRequired
                                    focused={this.state.temp} // PropTypes.bool
                                    onFocusChange={({ focused: temp }) => this.setState({ temp })} // PropTypes.func.isRequired
                                    id="homepage" // PropTypes.string.isRequired,
                                    placeholder={"mm/dd/yyyy"}
                                />  
                            </div>
                        </div>
                        <div className="rental-form-container">
                            <button>   Search   </button>
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