import Homepage from './homepage';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

const msp = state => {
    // debugger
    return ({
        currentUser: state.entities.users[state.session.id]
    })
}

const mdp = dispatch => {
    return ({
        logout: () => dispatch(logout())
    })
}

export default connect(msp, mdp)(Homepage);