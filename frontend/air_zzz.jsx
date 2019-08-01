import ReactDOM from 'react-dom'; 
import React from 'react'; 
import { login, logout, signup } from './util/session_api_util';
import { fetchListing, fetchListings } from './util/listings_api_util';
import Root from './components/root'
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    //Testing
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchListing = fetchListing;
    window.fetchListings = fetchListings;
    //End testing

    const root = document.getElementById('root'); 
    ReactDOM.render(<Root store={store}/>, root)
})