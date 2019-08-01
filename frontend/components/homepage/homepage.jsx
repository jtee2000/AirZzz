import React from 'react';
import { Link } from 'react-router-dom'
import Listings from '../listings/listings_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch} from 'react-router-dom'; 

const Homepage = ({ currentUser, logout, openModal }) => {

    const splash = () => (
        <>
            <div className="splash-background-image">
                <nav className="nav-bar">
                    <div className="nav-bar-left">
                        <Link to="/">
                            <div className="logo">
                                <img className="logo2" src={airTran}/>
                            </div>
                        </Link>
                    </div>
                    <div className="nav-bar-text">
                        <div className="host-hover">
                            <span>Become a host</span>
                        </div>
                        <span>Help</span>
                        <button onClick={() => openModal('login')}>Login</button>
                        <button onClick={() => openModal('signup')}>Sign up</button>
                    </div>
                </nav>
                <div className="rental-form">
                    <h1>Book unique places to stay and things to do.</h1>
                    <div className="rental-form-container">
                        <button>   Search   </button>
                    </div>
                </div>
            </div>
        </>
    );
    const loggedin = () => (
        <>  
            <nav className="nav-bar-2">
                <div className="nav-bar-left-2">
                    <Link to="/listings">
                        <div className="logo-2">
                            <img className="logo2-2" src={airTran2}/>
                        </div>
                    </Link>
                    <div className="search-bar-2">
                        <i className="fas fa-search" ></i>
                        <input type="text" value="Try &quot;Costa Blanca&quot;"/>
                    </div>
                </div>
                <div className="nav-bar-text-2">
                    <div className="host-hover-2-2">
                        <span>Add listing</span>
                    </div>
                    <span>Host</span>
                    <span>Saved</span>
                    <span>Trips</span>
                    <span>Messages</span>
                    <span>Help</span>
                    <button className="header-button-2" onClick={logout}>Log Out</button>
                </div>
            </nav>
        </>
    );

    return (
        currentUser ?
            loggedin(currentUser, logout) :
            splash()
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