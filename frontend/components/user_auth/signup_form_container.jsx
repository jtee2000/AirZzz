import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions'

const msp = ({errors}) => {
    return ({
        errors: errors.session,
        formType: "Sign up"
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
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors()),
        openModal: (modal) => dispatch(openModal(modal))
    };
};

export default connect(msp, mdp)(SessionForm)