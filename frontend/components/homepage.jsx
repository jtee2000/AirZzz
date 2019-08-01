import React from 'react';
import { Link } from 'react-router-dom'


const Homepage = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <>
        <div className="splash-background-image">
        <nav className="nav-bar">
            <div className="nav-bar-left">
                <Link to="/">
                    <div className="logo">
                        <div className="logo2"></div>
                    </div>
                </Link>
                {/* <div className="search-bar">
                    <i className="fas fa-search" ></i>
                    <input type="text" value="Try &quot;Costa Blanca&quot;"/>
                </div> */}
            </div>
            <div className="nav-bar-text">
                <div className="host-hover">
                <span>Become a host</span>
                </div>
                <span>Help</span>
                <button onClick={() => openModal('login')}>Login</button>
                {/* &nbsp;&nbsp; */}
                <button onClick={() => openModal('signup')}>Sign up</button>
            </div>
        </nav>
        </div>
        </>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};

    // render() {
        // if (!this.props.currentUser) {
        //     return (
        //         <>
        //         <nav className="nav-bar">
        //             <Link to="/">Airzz</Link>
        //             <div className="nav-bar-text">
        //                 <span>Become a Host</span>
        //                 <span>Help</span>
        //                 <Link to="/signup">Signup</Link>
        //                 <Link to="/login">Login</Link>
        //             </div>
        //         </nav>
        //         </>
        //     )
        // }

        // return (
            // <>
            //     <h1>Welcome to AirZzz, {this.props.currentUser.email}</h1>
            //     <button onClick={this.props.logout}>Logout</button>
            // </>

//             currentUser ?
//             navigation_bar(currentUser, logout) :
//             sessionLinks()
//         )
//     }
// }

export default Homepage; 