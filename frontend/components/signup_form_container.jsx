import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';
import SessionForm from './session_form';
import React from 'react';

const msp = ({errors}) => {
    return ({
        errors: errors.session,
        formType: "signup"
    })
}

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Login
      </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(SessionForm)