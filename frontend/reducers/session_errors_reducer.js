import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from "../actions/session_actions";


const sessionsErrorsReducer = (state = [], action) => {
    const oldState = Object.freeze(state)
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_ERRORS: 
            return [];
        default:
            return oldState;
    }
}

export default sessionsErrorsReducer;