import React from 'react';
import { Link } from 'react-router-dom'


class Homepage extends React.Component {


    render() {
        if (!this.props.currentUser) {
            return (
                <>
                <nav className="nav-bar">
                    <Link to="/">Airzz</Link>
                    <div className="nav-bar-text">
                        <span>Become a Host</span>
                        <span>Help</span>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                    </div>
                </nav>
                </>
            )
        }

        return (
            <>
                <h1>Welcome to AirZzz, {this.props.currentUser.email}</h1>
                <button onClick={this.props.logout}>Logout</button>
            </>
        )
    }
}

export default Homepage; 