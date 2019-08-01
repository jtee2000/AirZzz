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
            <div className="rental-form">
                <h1>Book unqiue places to stay and things to do.</h1>
                <div className="rental-form-container">
                    <button>   Search   </button>
                </div>
            </div>
        </div>
        </>
    );
    const personalGreeting = () => (
        // <hgroup className="header-group">
        //     <h2 className="header-name">Hi, {currentUser.email}!</h2>
        // </hgroup>
        <nav className="nav-bar-2">
            <div className="nav-bar-left-2">
                <Link to="/">
                    <div className="logo-2">
                        <div className="logo2-2"></div>
                    </div>
                </Link>
                <div className="search-bar-2">
                    <i className="fas fa-search" ></i>
                    <input type="text" value="Try &quot;Costa Blanca&quot;"/>
                </div>
            </div>
            <div className="nav-bar-text-2">
                <div className="host-hover-2-2">
                    <span>Become a host</span>
                </div>
                <span>Help</span>
                <button className="header-button-2" onClick={logout}>Log Out</button>
                {/* <button onClick={() => openModal('login')}>Login</button> */}
                {/* &nbsp;&nbsp; */}
                {/* <button onClick={() => openModal('signup')}>Sign up</button> */}
            </div>
        </nav>
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