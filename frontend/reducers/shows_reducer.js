import { merge } from 'lodash';
import { RECEIVE_SHOWS, RECEIVE_SHOW, RECEIVE_SEARCHED_SHOWS } from '../actions/show_actions';
export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SHOWS:
            return merge({}, state, action.shows)
        case RECEIVE_SHOW:
            return merge({}, state, action.shows)
        case RECEIVE_SEARCHED_SHOWS:
            return merge({}, state, action.shows)
        default:
            return state;
    }
}