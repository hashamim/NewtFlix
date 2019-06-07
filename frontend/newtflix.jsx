import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as SessionApiUtils from './utils/session_api_utils';
import { createListItem, destroyListItem  } from './actions/list_actions';
import { queryShows } from './actions/show_actions';

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
    window.queryShows = queryShows;
    window.createListItem = createListItem;
    window.destroyListItem = destroyListItem;
    window.destroySession = SessionApiUtils.destroySession;
    window.store = store;

    //TEST-END
})