import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as SessionApiUtils from './utils/session_api_utils';
import { login, signup, logout } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');

    //Bootstrap user to store
    let preloadedState = undefined;
    if(window.currentUser){
        preloadedState = {
            entities: {
                user: window.currentUser,
            },
            session: {
                id: window.currentUser.id,
            },
        };
    }
    const store = configureStore(preloadedState);

    ReactDOM.render(<Root store={store}/>, root);

    //TEST
    // window.createUser = SessionApiUtils.createUser;
    // window.createSession = SessionApiUtils.createSession;
    window.destroySession = SessionApiUtils.destroySession;

    window.store = store;
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    //TEST-END
})