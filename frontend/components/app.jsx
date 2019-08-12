import React from 'react'; 
import { Route, Switch, Link } from 'react-router-dom'; 
import HomepageContainer from './homepage/homepage_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './user_auth/modal';
import Listings from './listings/listings_container';
import ListingShow from './listings/listing_show_container';
import Trips from './bookings/trips_container';
import ListingMap from './map/listing_map_container';

const App = () => {
    return(
        <div>
            <Modal />
            <header>
            <HomepageContainer />
            </header>
            <Route exact path="/listings" component={Listings} />
            <Route exact path="/listings/:listingId" component={ListingShow}/>
            <Route exact path="/trips" component={Trips} />
            <Route exact path="/map" component={ListingMap} />
        </div>
    )
}

export default App; 