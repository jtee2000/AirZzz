import React from 'react'; 
import { Route, Switch, Link } from 'react-router-dom'; 
import HomepageContainer from './homepage/homepage_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './user_auth/modal';

const App = () => {
    // debugger
    return(
        <div>
            <Modal />
            <header>
            <HomepageContainer />
            </header>
            {/* <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
            </Switch> */}
        </div>
    )
}

export default App; 