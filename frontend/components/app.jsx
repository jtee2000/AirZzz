import React from 'react'; 
import { Route, Switch, Link } from 'react-router-dom'; 
import Homepage from './homepage/homepage_container';
import { AuthRoute, ProtectedRoute, ListingsRoute } from '../util/route_util';
import Modal from './user_auth/modal';
import Listings from './listings/listings_container';
import ListingShow from './listings/listing_show_container';
import Trips from './bookings/trips_container';
import ListingMap from './map/listing_map_container';
import AuthNav from './navbar/auth_nav_container';
import ProtNav from './navbar/prot_nav_container';

const App = () => {
    return(
        <div>
            <Modal />
            <header>
            <AuthRoute exact path="/" component={Homepage} />
            {/* <Homepage /> */}
            {/* <AuthRoute exact path="/listings" component={AuthNav} />
            <ProtectedRoute exact path="/listings" component={ProtNav} /> */}
            <ListingsRoute path="/listings"/>
            </header>
            <Route exact path="/listings" component={Listings} />
            <Route exact path="/listings/show/:listingId" component={ListingShow}/>
            <Route exact path="listings/trips" component={Trips} />
            <Route exact path="/listings/map" component={ListingMap} />
        </div>
    )
}

export default App; 