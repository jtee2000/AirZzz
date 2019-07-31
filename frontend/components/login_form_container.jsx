import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import SessionForm from './session_form';
import React from 'react';

const msp = ({errors}) => {
    return ({
        errors: errors.session,
        formType: "Login"
    })
};


const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
      </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};


export default connect(msp, mdp)(SessionForm);