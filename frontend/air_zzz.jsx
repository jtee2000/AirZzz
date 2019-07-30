import ReactDOM from 'react-dom'; 
import React from 'react'; 
import { login, logout, signup } from './util/session_api_util';
import Root from './components/root'
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    //Testing
    window.login = login; 
    window.logout = logout; 
    window.signup = signup; 
    //End testing
    
    const store = configureStore();
    window.getState = store.getState;
    const root = document.getElementById('root'); 
    ReactDOM.render(<Root store={store}/>, root)
})