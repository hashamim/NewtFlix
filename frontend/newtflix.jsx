import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import * as SessionApiUtils from './utils/session_api_utils';
import { login, signup, logout } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configureStore();

    ReactDOM.render(<h1>We out here boiiiis</h1>, root);

    //TEST
    // window.createUser = SessionApiUtils.createUser;
    // window.createSession = SessionApiUtils.createSession;
    // window.destroySession = SessionApiUtils.destroySession;

    window.store = store;
    window.login = login;
    window.logout = logout;
    window.signup = signup;
})