import { connect } from 'react-redux';
import { signup, resetErrors } from '../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const SIGNUP_TEXT = "Sign Up";

const msp = (state) => ({
    formType: SIGNUP_TEXT,
    errors: state.errors.sessionErrors,
})

const mdp = (dispatch) => ({
    action: (formUser) => dispatch(signup(formUser)),
    resetErrors: () => dispatch(resetErrors()),
})

export default withRouter(connect(msp, mdp)(SessionForm));