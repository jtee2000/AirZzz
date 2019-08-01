import React from 'react'; 
import { Route, Switch, Link } from 'react-router-dom'; 
import HomepageContainer from './homepage_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal';

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