import { connect } from 'react-redux';
import { login, resetErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const LOGIN_TEXT = "Log In";

const msp = (state) => ({
    formType: LOGIN_TEXT,
    errors: state.errors.sessionErrors,
})

const mdp = (dispatch) => ({
    action: (formUser) => dispatch(login(formUser)),
    resetErrors: () => dispatch(resetErrors())
})

export default connect(msp, mdp)(SessionForm);