import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import React from 'react';
import {closeModal} from '../../actions/modal_actions';

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
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    };
};


export default connect(msp, mdp)(SessionForm);