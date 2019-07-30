import React from 'react'; 
import { Route } from 'react-router-dom'; 
import HomepageContainer from './homepage_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

const App = () => {
    // debugger
    return(
        <div>
            <header>Welcome to AirZzz2
            </header>
            <HomepageContainer />

            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </div>
    )
}

export default App; 