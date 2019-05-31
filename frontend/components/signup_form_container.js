import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';
import SessionForm from './session_form';

const SIGNUP_TEXT = "Sign Up";

const msp = (state) => ({
    formType: SIGNUP_TEXT,
    errors: state.errors.sessionErrors,
})

const mdp = (dispatch) => ({
    action: (formUser) => dispatch(signup(formUser)),
})

export default connect(msp, mdp)(SessionForm);