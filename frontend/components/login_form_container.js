import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import SessionForm from './session_form';

const LOGIN_TEXT = "Log In";

const msp = () => ({
    formType: LOGIN_TEXT,
})

const mdp = (dispatch) => ({
    action: (formUser) => dispatch(login(formUser)),
})

export default connect(msp, mdp)(SessionForm);