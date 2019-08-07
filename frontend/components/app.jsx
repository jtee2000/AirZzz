import React from 'react'; 
import { Route, Switch, Link } from 'react-router-dom'; 
import HomepageContainer from './homepage/homepage_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './user_auth/modal';
import Listings from './listings/listings_container';
import ListingShow from './listings/listing_show_container';
import Trips from './bookings/trips_container';

const App = () => {
    return(
        <div>
            <Modal />
            <header>
            <HomepageContainer />
            </header>
            <Route exact path="/listings" component={Listings} />
            <Route exact path="/listings/:listingId" component={ListingShow}/>
            <Route exeact path="/trips" component={Trips} />
            {/* <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
            </Switch> */}
        </div>
    )
}

export default App; 