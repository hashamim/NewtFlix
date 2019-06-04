import { merge } from 'lodash';
import { RECEIVE_SHOWS, RECEIVE_SHOW } from '../actions/show_actions';
export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SHOWS:
            return merge({}, action.genres)
        case RECEIVE_SHOW:
            return merge({}, state, action.genres)
        default:
            return state;
    }
}