import React from 'react';
import { Link } from 'react-router-dom'
import { Route, Switch, withRouter } from 'react-router-dom';


class AuthNav extends React.Component {
    constructor(props) {
        super(props)
        this.loggedout = this.loggedout.bind(this);
        this.state = {
            search: ""
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
            this.setState({ search: "" })
            debugger
            this.props.history.push("listings/map")
        }
    }

    loggedout() {
        return (
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
                            <input id="airzzz-search" type="text" placeholder="Try &quot;Boston College&quot;" value={this.state.search} onChange={this.update("search")} onKeyUp={this.handleEnter} />
                        </div>
                    </div>
                    <div className="nav-bar-text-2">
                        <div className="host-hover-2">
                            <span>Become a host</span>
                        </div>
                        <div className="host-hover-2">
                            <span>Help</span>
                        </div>
                        <div className="host-hover-2">
                            <button onClick={() => this.props.openModal('login')}>Login</button>
                        </div>
                        <div className="host-hover-2">
                            <button onClick={() => this.props.openModal('signup')}>Sign up</button>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
    render() {
        return (
                this.loggedout()
        )
     }

}


export default withRouter(AuthNav); 